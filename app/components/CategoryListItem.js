import React from 'react';
import { ListItem } from 'material-ui';

const CategoryListItem = ({ name, description, onClick }) => (
    <ListItem primaryText={name} secondaryText={description} onClick={onClick} />
)

export default CategoryListItem
