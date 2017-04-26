import { connect } from 'react-redux';

import { setUserSearch } from '../actions';
import setCourseAttendance from '../actions/attending';

import UserList from '../components/UserList';

const mapStateToProps = (state, { courseId }) => {
    const attendees = state.courses.find(course => course.courseId == courseId).attendees;
    return {
        /** A string with the current searchword of the user in the userList */
        userSearch: state.userSearch,
        /** An array with all users, filtered based on userSearch, sorted alphabetically and
        /*  mapped to new objects containing an "attending" property
         */
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
    /** Function called when adding a user to the course, dispatching setCourseAttendance action
    /*  with parameters userId, courseId and attending set as true
    */
    onAddClick: userId => dispatch(setCourseAttendance(userId, courseId, true)),
    /** Function called when removing a user from the course, dispatching setCourseAttendance action
    /*  with parameters userId, courseId and attending set as false
    */
    onRemoveClick: userId => dispatch(setCourseAttendance(userId, courseId, false)),
    /** Function called when the user edits the search field, dispatching the setUserSearch action
    /*  with the searchWord as parameter
    */
    onSearchChange: searchWord => dispatch(setUserSearch(searchWord))
});

const UserUserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserUserList;
