import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import ResourceListItem from './ResourceListItem';

const ResourceList = ({ courseId, categoryId, resources }) => (
  <List>
    {resources.map(({ resourceId, name, body }) => (
      <Link
        to={`courses/${courseId}/categories/${categoryId}/resources/${resourceId}/resourceView/`}
        key={resourceId}
      >
        <ResourceListItem
          name={name}
          body={body}
        />
      </Link>
    ))}
  </List>
);

ResourceList.propTypes = {
    courseId: React.PropTypes.number.isRequired,
    categoryId: React.PropTypes.number.isRequired,
    resources: React.PropTypes.array.isRequired
};

export default ResourceList;
