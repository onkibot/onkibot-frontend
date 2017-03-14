import React from 'react';
import { ListItem } from 'material-ui';

const ResourceListItem = ({ name, description }) => (
    <ListItem primaryText={name} secondaryText={description} />
)

export default ResourceListItem
