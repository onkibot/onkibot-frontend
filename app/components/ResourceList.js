import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import ResourceListItem from './ResourceListItem';

const ResourceList = ({ courseId, categoryId, resources }) => (
  resources.length > 0 ? (
    <List>
      {resources.map(({ resourceId, name, body, myFeedback }) => (
        <Link
          to={`courses/${courseId}/categories/${categoryId}/resources/${resourceId}/resourceView/`}
          key={resourceId}
        >
          <ResourceListItem
            name={name}
            body={body}
            hasMyFeedback={myFeedback != null}
          />
        </Link>
      ))}
    </List>
  ) : (
    <p>Looks like there are no resources yet.</p>
  )
);

ResourceList.propTypes = {
    courseId: React.PropTypes.string.isRequired,
    categoryId: React.PropTypes.string.isRequired,
    resources: React.PropTypes.array.isRequired
};

export default ResourceList;
