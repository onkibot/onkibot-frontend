import React from 'react';
import { connect } from 'react-redux';

import ResourceList from '../components/ResourceList';

const mapStateToProps = (state, ownProps) => {
  let course = state.courses.find((course) => course.id == ownProps.courseId);
  let category = course.categories.find((category) => category.id == ownProps.categoryId);
  return {
      courseId: ownProps.courseId,
      categoryId: ownProps.categoryId,
      resources: category.resources
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onResourceClick: () => {}
  }
};

const UserResourceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceList);

export default UserResourceList;
