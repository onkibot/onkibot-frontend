import { connect } from 'react-redux';
import { FlatButton } from 'material-ui';

import { toggleOnOff } from '../actions';

const mapStateToProps = state => ({
    label: state.onOff ? 'On' : 'Off'
});

const mapDispatchToProps = dispatch => ({
    onClick: () => {
        dispatch(toggleOnOff());
    }
});

const OnOffButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlatButton);

export default OnOffButton;
