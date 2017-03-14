import React from 'react';
import { List } from 'material-ui';

import CategoryListItem from './CategoryListItem';


const CategoryList = ({ categories, onCategoryClick }) => (
    <List>
        {categories.map(({ id, name, description }) => (
            <CategoryListItem key={id} name={name} description={description} onClick={() => onCategoryClick(id)} />
        ))}
    </List>
);

export default CategoryList;
