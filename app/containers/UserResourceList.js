import React from 'react';
import { connect } from 'react-redux';

import ResourceList from '../components/ResourceList';

const mapStateToProps = (state, ownProps) => {
  var categories = [];
  var resources = [];
  for (var i = 0; i < state.courses.length; i++)
  {
      if (state.courses[i].id == ownProps.courseId)
      {
          categories = state.courses[i].categories;
          for (var j = 0; j < categories.length; j++)
          {
              if (categories[j].id == ownProps.categoryId)
                  resources = categories[j].resources;
          }
      }

  }
  return {
      courseId: ownProps.courseId,
      categoryId: ownProps.categoryId,
      resources
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
