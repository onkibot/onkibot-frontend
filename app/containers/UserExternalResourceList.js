import React from 'react';
import { connect } from 'react-redux';

import ExternalResourceList from '../components/ExternalResourceList';

const mapStateToProps = (state, ownProps) => {
  let course = state.courses.find((course) => course.id == ownProps.courseId);
  let category = course.categories.find((category) => category.id == ownProps.categoryId);
  let resource = category.resources.find((resource) => resource.id == ownProps.resourceId);
  return {
    comment: resource.comment,
    title: resource.title,
    externalResources: resource.externalResources
  }
}

const UserExternalResourceList = connect(
  mapStateToProps
)(ExternalResourceList);

export default UserExternalResourceList;
