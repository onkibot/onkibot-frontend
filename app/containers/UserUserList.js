import { connect } from 'react-redux';

import { setUserSearch } from '../actions';
import { setCourseAttendance } from '../actions/attending';

import UserList from '../components/UserList';

const mapStateToProps = (state, { courseId }) => {
    const attendees = state.courses.find(course => course.courseId == courseId).attendees;
    return {
        userSearch: state.userSearch,
        users: state.users.filter((user) => {
            if (state.userSearch == '') {
                return true;
            } else {
                return user.name.toLowerCase().indexOf(state.userSearch.toLowerCase()) != -1;
            }
        })
        .sort((user1, user2) => user1.name.localeCompare(user2.name))
        .map(user => ({
            ...user,
            attending: attendees.some(attendee => attendee == user.userId)
        }))
    };
};

const mapDispatchToProps = (dispatch, { courseId }) => ({
    onAddClick: userId => dispatch(setCourseAttendance(userId, courseId, true)),
    onRemoveClick: userId => dispatch(setCourseAttendance(userId, courseId, false)),
    onSearchChange: searchWord => dispatch(setUserSearch(searchWord))
});

const UserUserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserUserList;
