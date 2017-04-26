import { connect } from 'react-redux';

import UserCard from '../components/UserCard';

/** returns an object with the users name if the user is logged in */
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
