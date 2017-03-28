import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import ResourceListItem from './ResourceListItem';

const ResourceList = ({ courseId, categoryId, resources }) => (
  <List>
    {resources.map(({ id, title, comment }) => (
      <Link
        to={`courses/${courseId}/categories/${categoryId}/resources/${id}/resourceView/`}
        key={id}
      >
        <ResourceListItem
          title={title}
          comment={comment}
        />
      </Link>
        ))}
  </List>
);

export default ResourceList;
