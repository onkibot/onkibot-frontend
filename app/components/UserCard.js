import React from 'react';
import { Card, CardHeader } from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';

/** A card displayed under the navbar when the user is logged in */
const UserCard = ({ name }) => {
    if (!name) {
        return null;
    }
    return (
      <Card>
        <CardHeader
          avatar={<Person />}
          title={`Hello, ${name}`}
          subtitle="Welcome to Onkibot"
        />
      </Card>
    );
};

UserCard.propTypes = {
    /** The username of the logged in user, passed as props */
    name: React.PropTypes.string
};

export default UserCard;
