import { connect } from 'react-redux';

import CourseList from '../components/CourseList';

const mapStateToProps = state => ({
    /** An array of all the courses the user attends */
    courses: state.courses
});

const UserCourseList = connect(
    mapStateToProps
)(CourseList);

export default UserCourseList;
