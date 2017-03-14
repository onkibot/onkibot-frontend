import React from 'react';
import { connect } from 'react-redux';

import CategoryList from '../components/CategoryList';

const mapStateToProps = (state, ownProps) => {
  let course = state.courses.find((course) => course.id == ownProps.courseId);
  return {
      courseId: ownProps.courseId,
      categories: course.categories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: () => {}
  }
};

const UserCategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

export default UserCategoryList;
