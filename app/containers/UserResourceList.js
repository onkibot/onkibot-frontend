import { connect } from 'react-redux';

import ResourceList from '../components/ResourceList';

const mapStateToProps = (state, {courseId, categoryId}) => {
  const resources = state.resources.filter((resource) => resource.categoryId == categoryId);
  return {
      resources: resources
  }
};

const UserResourceList = connect(
  mapStateToProps
)(ResourceList);

export default UserResourceList;
