import React from 'react';
import { FlatButton } from 'material-ui';
import { Link } from 'react-router';

import UserCategoryList from '../../containers/UserCategoryList'

const Categories = (props) => (
    <div>
        <h1>Categories</h1>
        <Link to="courses"><FlatButton>Back to courses</FlatButton></Link>
        <br/>
        <Link to={"courses/"+props.params.courseId+"/categories/create"}><FlatButton>Create category</FlatButton></Link>
        <UserCategoryList courseId={props.params.courseId} />
    </div>
);

export default Categories;
