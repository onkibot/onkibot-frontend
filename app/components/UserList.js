import React from 'react';
import { List, TextField } from 'material-ui';

import UserListItem from './UserListItem';

/** The user list component, displaying all users and a button for adding or removing a user from a specific course.
/*  Also contains a search field which filters the displayed users.
*/
const UserList = ({ userSearch, users, onAddClick, onRemoveClick, onSearchChange }) => (
  <div>
    <TextField
      value={userSearch}
      fullWidth={true}
      floatingLabelText="Search"
      onChange={e => onSearchChange(e.target.value)}
    />
    <List>
      {users.map(({ userId, name, isInstructor, attending }) => (
        <UserListItem
          key={userId}
          userId={userId}
          name={name}
          isInstructor={isInstructor}
          attending={attending}
          onClick={attending ? onRemoveClick : onAddClick}
        />
        ))}
    </List>
  </div>
);

UserList.propTypes = {
    /** The current search word typed by the user */
    userSearch: React.PropTypes.string.isRequired,
    /** An array of user objects, each containing a userId, name, isInstructor bool and attending bool */
    users: React.PropTypes.array.isRequired,
    /** A function called when adding a user to the course */
    onAddClick: React.PropTypes.func.isRequired,
    /** A function called when removing a user from the course */
    onRemoveClick: React.PropTypes.func.isRequired,
    /** A function called whenever the user edits the search */
    onSearchChange: React.PropTypes.func.isRequired
};

export default UserList;
