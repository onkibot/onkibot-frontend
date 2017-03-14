import React from 'react';
import { FlatButton } from 'material-ui';
import { Link } from 'react-router';

import UserResourceList from '../../containers/UserResourceList'

const Resources = (props) => (
    <div>
        <h1>Resources</h1>
        <Link to={`courses/${props.params.courseId}/categories`}><FlatButton>Back to categories</FlatButton></Link>
        <br/>
        <Link to={`courses/${props.params.courseId}/categories/${props.params.categoryId}/resources/create`}><FlatButton>Create resource</FlatButton></Link>
        <UserResourceList courseId={props.params.courseId} categoryId={props.params.categoryId}/>
    </div>
);

export default Resources;
