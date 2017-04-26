import { connect } from 'react-redux';
import { Snackbar } from 'material-ui';

import { clearError } from '../actions/error';

const mapStateToProps = state => ({
    open: state.error != null,
    message: (state.error || '').toString()
});

const mapDispatchToProps = dispatch => ({
    onRequestClose: () => dispatch(clearError())
});

const ErrorSnackbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Snackbar);

export default ErrorSnackbar;
