import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CategoryListItem from './CategoryListItem';

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
    courseId: React.PropTypes.string.isRequired,
    categories: React.PropTypes.array.isRequired
};

export default CategoryList;
