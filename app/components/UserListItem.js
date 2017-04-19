import React from 'react';
import { ListItem, RaisedButton } from 'material-ui';
import InstructorIcon from 'material-ui/svg-icons/action/build';
import StudentIcon from 'material-ui/svg-icons/action/face';

const UserListItem = ({ userId, name, isInstructor, attending, onClick }) => (
  <ListItem
    primaryText={name}
    leftIcon={isInstructor ? <InstructorIcon /> : <StudentIcon />}
    rightIconButton={<RaisedButton
      label={attending ? 'Remove from course' : 'Add to course'}
      className="place-mid"
      backgroundColor={attending ? 'red' : 'green'}
      style={{
          margin: '6px',
          padding: '0px',
          width: '200px'
      }}
      onClick={() => onClick(userId)}
    />}
  />
);

UserListItem.propTypes = {
    userId: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    isInstructor: React.PropTypes.bool.isRequired,
    attending: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default UserListItem;
