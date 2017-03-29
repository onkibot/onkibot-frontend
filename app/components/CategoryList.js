import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CategoryListItem from './CategoryListItem';

const CategoryList = ({ courseId, categories }) => (
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
);

export default CategoryList;
