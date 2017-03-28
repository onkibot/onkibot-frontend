import { connect } from 'react-redux';

import CategoryList from '../components/CategoryList';

const mapStateToProps = (state, ownProps) => {
    const stateCourse = state.courses.find(course => course.id == ownProps.courseId);
    return {
        courseId: ownProps.courseId,
        categories: stateCourse.categories
    };
};

const UserCategoryList = connect(
  mapStateToProps
)(CategoryList);

export default UserCategoryList;
