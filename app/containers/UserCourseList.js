import React from 'react';
import { connect } from 'react-redux';

import CourseList from '../components/CourseList';

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    };
};

const mapDispactToProps = (dispatch) => {
    return {
        onCourseClick: () => {}
    }
};

const UserCourseList = connect(
    mapStateToProps,
    mapDispactToProps
)(CourseList);

export default UserCourseList;