import { connect } from 'react-redux';
import { Snackbar } from 'material-ui';

import { clearError } from '../actions/error';

const mapStateToProps = (state) => {
    let error = state.error;
    if (error && typeof error === 'object') {
        error = error.message;
    }
    if (!error) {
        error = 'Unknown error';
    }
    return {
        open: state.error != null,
        message: error.toString()
    };
};

const mapDispatchToProps = dispatch => ({
    onRequestClose: () => dispatch(clearError())
});

const ErrorSnackbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Snackbar);

export default ErrorSnackbar;
