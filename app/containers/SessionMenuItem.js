import { connect } from 'react-redux';

import LinkMenuItem from '../components/LinkMenuItem';

const mapStateToProps = state => ({
    disable: !state.auth.session
});

const SessionMenuItem = connect(
    mapStateToProps,
    undefined
)(LinkMenuItem);

export default SessionMenuItem;
