import { connect } from 'react-redux';

import LinkMenuItem from '../components/LinkMenuItem';

const mapStateToProps = state => ({
    disable: state.auth.session
});

const NoSessionMenuItem = connect(
    mapStateToProps,
    undefined
)(LinkMenuItem);

export default NoSessionMenuItem;
