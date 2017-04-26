import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CategoryListItem from './CategoryListItem';

/** The category list component, displaying all categories in a specific course */
const CategoryList = ({ courseId, categories }) => (
  categories.length > 0 ? (
    <List>
      {categories.map(({ categoryId, name, description }) => (
        <Link
          to={`courses/${courseId}/categories/${categoryId}/resources`}
          key={categoryId}
        >
          <CategoryListItem
            name={name}
            description={description}
          />
        </Link>
      ))}
    </List>
  ) : (
    <p className="text-align-center">Looks like there are no categories yet.</p>
  )
);

CategoryList.propTypes = {
    /** The courseId of the course containing the displayed categories */
    courseId: React.PropTypes.string.isRequired,
    /** An array of category objects, each containing a name and a description */
    categories: React.PropTypes.array.isRequired
};

export default CategoryList;
