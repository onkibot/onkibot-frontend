import { connect } from 'react-redux';

import ResourceView from '../components/pages/ResourceView';


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

ResourceView = connect(
  mapStateToProps,
  null
)(ResourceView);

export default ResourceView;
