import React from 'react';
import { ListItem, RaisedButton } from 'material-ui';
import InstructorIcon from 'material-ui/svg-icons/action/build';
import StudentIcon from 'material-ui/svg-icons/action/face';

/** A list item for the user list, displaying information about a specific user and handeling add/removal */
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
    /** The users userId, passed as props */
    userId: React.PropTypes.number.isRequired,
    /** The users username, passed as props */
    name: React.PropTypes.string.isRequired,
    /** A bool describing whether the user is an instructor, passed as props */
    isInstructor: React.PropTypes.bool.isRequired,
    /** A bool describing whether the user is already attending the course, passed as props */
    attending: React.PropTypes.bool.isRequired,
    /** A function which is called when the user clicks the add/remove button, gets passed the userId */
    onClick: React.PropTypes.func.isRequired
};

export default UserListItem;
