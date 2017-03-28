import { connect } from 'react-redux';

import ResourceList from '../components/ResourceList';

const mapStateToProps = (state, ownProps) => {
    const stateCourse = state.courses.find(course => course.id == ownProps.courseId);
    const stateCategory = stateCourse.categories.find(category => category.id == ownProps.categoryId);
    return {
        courseId: ownProps.courseId,
        categoryId: ownProps.categoryId,
        resources: stateCategory.resources
    };
};

const UserResourceList = connect(
  mapStateToProps
)(ResourceList);

export default UserResourceList;
