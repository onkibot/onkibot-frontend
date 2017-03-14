import React from 'react';
import { ListItem } from 'material-ui';

const ResourceListItem = ({ name, description, onClick }) => (
    <ListItem primaryText={name} secondaryText={description} onClick={onClick} />
)

export default ResourceListItem
