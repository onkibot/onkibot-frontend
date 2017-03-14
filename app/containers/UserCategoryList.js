import React from 'react';
import { connect } from 'react-redux';

import CategoryList from '../components/CategoryList';

const mapStateToProps = (state, ownProps) => {
  var categories = [];
  for (var i = 0; i < state.courses.length; i++)
  {
    if (state.courses[i].id == ownProps.courseId)
      categories = state.courses[i].categories;
  }
  return {
      categories
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
