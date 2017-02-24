import React from 'react';
import { connect } from 'react-redux';

import UserCard from '../components/UserCard';

const mapStateToProps = (state) => {
    const session = state.auth.session;
    if (session) {
        return {
            name: session.name
        };
    } else {
        return {};
    }
};

const SessionUserCard = connect(
    mapStateToProps,
    undefined
)(UserCard);

export default SessionUserCard;