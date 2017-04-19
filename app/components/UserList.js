import React from 'react';
import { List, TextField } from 'material-ui';

import UserListItem from './UserListItem';

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
    userSearch: React.PropTypes.string.isRequired,
    users: React.PropTypes.array.isRequired,
    onAddClick: React.PropTypes.func.isRequired,
    onRemoveClick: React.PropTypes.func.isRequired,
    onSearchChange: React.PropTypes.func.isRequired
};

export default UserList;
