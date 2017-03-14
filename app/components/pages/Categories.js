import React from 'react';
import { FlatButton } from 'material-ui'

import UserCategoryList from '../../containers/UserCategoryList'

const Categories = (props) => (
    <div>
        <h1>Categories</h1>
        <a href="#/courses"><FlatButton>Back to courses</FlatButton></a>
        <br/>
        <a href={"#/categories/create/"+props.params.courseId}><FlatButton>Create category</FlatButton></a>
        <UserCategoryList courseId={props.params.courseId} />
    </div>
);

export default Categories;
