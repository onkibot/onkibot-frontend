import React from 'react';
import { ListItem } from 'material-ui';

const CategoryListItem = ({ name, description }) => (
    <ListItem primaryText={name} secondaryText={description} />
)

export default CategoryListItem
