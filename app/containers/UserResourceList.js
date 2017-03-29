import { connect } from 'react-redux';

import ResourceList from '../components/ResourceList';

const mapStateToProps = (state, { categoryId }) => ({
    resources: state.resources.filter(resource => resource.categoryId == categoryId)
});

const UserResourceList = connect(
    mapStateToProps
)(ResourceList);

export default UserResourceList;
