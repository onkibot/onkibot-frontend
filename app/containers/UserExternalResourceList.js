import { connect } from 'react-redux';

import ExternalResourceList from '../components/ExternalResourceList';

const mapStateToProps = (state, ownProps) => {
    const stateCourse = state.courses.find(course => course.id == ownProps.courseId);
    const stateCategory = stateCourse.categories.find(category => category.id == ownProps.categoryId);
    const stateResource = stateCategory.resources.find(resource => resource.id == ownProps.resourceId);
    return {
        comment: stateResource.comment,
        title: stateResource.title,
        externalResources: stateResource.externalResources
    };
};

const UserExternalResourceList = connect(
  mapStateToProps
)(ExternalResourceList);

export default UserExternalResourceList;
