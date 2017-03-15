import { connect } from 'react-redux';

import CategoryList from '../components/CategoryList';

const mapStateToProps = (state, {courseId}) => ({
    categories: state.categories.filter((category) => category.courseId == courseId)
});

const UserCategoryList = connect(
    mapStateToProps
)(CategoryList);

export default UserCategoryList;
