import React from 'react';
import { connect } from 'react-redux';
import { FlatButton } from 'material-ui';

import { toggleOnOff } from '../actions';

const mapStateToProps = (state) => {
    return {
        label: state.onOff ? 'On' : 'Off'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(toggleOnOff());
        }
    };
};

const OnOffButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlatButton);

export default OnOffButton;