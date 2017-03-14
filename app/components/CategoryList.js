import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CategoryListItem from './CategoryListItem';

const CategoryList = ({ courseId, categories, onCategoryClick }) => (
    <List>
        {categories.map(({ id, name, description }) => (
            <Link to={"courses/"+courseId+"/categories/"+id+"/resources"} key={id}><CategoryListItem name={name} description={description} onClick={() => onCategoryClick(id)} /></Link>
        ))}
    </List>
);

export default CategoryList;
