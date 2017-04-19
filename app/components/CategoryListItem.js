import React from 'react';
import { ListItem } from 'material-ui';
import CategoryIcon from 'material-ui/svg-icons/maps/local-offer';

const CategoryListItem = ({ name, description }) => (
  <ListItem primaryText={name} secondaryText={description} leftIcon={<CategoryIcon />} />
);

CategoryListItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
};

export default CategoryListItem;
