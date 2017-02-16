import React from 'react';
import { connect } from 'react-redux';
import { toggleOnOff } from '../actions';
import { FlatButton } from 'material-ui';

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
}

const OnOffButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(FlatButton);

export default OnOffButton;