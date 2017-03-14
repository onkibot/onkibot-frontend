import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import ResourceListItem from './ResourceListItem';

const ResourceList = ({ courseId, categoryId, resources, onResourceClick }) => (
    <List>
        {resources.map(({id, name, description }) => (
            <Link to={"courses/"+courseId+"/categories/"+categoryId+"/resources/"+id} key={id}><ResourceListItem name={name} description={description} onClick={() => onResourceClick(id)} /></Link>
        ))}
    </List>
);

export default ResourceList;
