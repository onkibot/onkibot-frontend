import React from 'react';
import { List, TextField } from 'material-ui';

import UserListItem from './UserListItem';

const UserList = ({ userSearch, users, onAddClick, onRemoveClick, onSearchChange }) => (
  <div>
    <TextField value={userSearch} fullWidth={true} floatingLabelText="Search" onChange={(e)=>{onSearchChange(e.target.value)}}/>
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

export default UserList;
