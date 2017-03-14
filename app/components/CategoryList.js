import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CategoryListItem from './CategoryListItem';

const CategoryList = ({ courseId, categories }) => (
    <List>
        {categories.map(({ id, name, description }) => (
            <Link to={`courses/${courseId}/categories/${id}/resources`} key={id}><CategoryListItem name={name} description={description} /></Link>
        ))}
    </List>
);

export default CategoryList;
