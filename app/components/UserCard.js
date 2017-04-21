import React from 'react';
import { Card, CardHeader } from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';

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
    name: React.PropTypes.string
};

export default UserCard;
