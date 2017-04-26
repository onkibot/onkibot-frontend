import React from 'react';
import { ListItem } from 'material-ui';
import CategoryIcon from 'material-ui/svg-icons/maps/local-offer';

/** A list item for the category list, displaying information for a specific category */
const CategoryListItem = ({ name, description }) => (
  <ListItem primaryText={name} secondaryText={description} leftIcon={<CategoryIcon />} />
);

CategoryListItem.propTypes = {
    /** The category name, passed as prop */
    name: React.PropTypes.string.isRequired,
    /** A description of the category, passed as prop */
    description: React.PropTypes.string.isRequired
};

export default CategoryListItem;
