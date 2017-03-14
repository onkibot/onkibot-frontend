import React from 'react';
import { connect } from 'react-redux';

import CourseList from '../components/CourseList';

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
};

const UserCourseList = connect(
    mapStateToProps
)(CourseList);

export default UserCourseList;
