import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import ResourceListItem from './ResourceListItem';

/** The resource list component, displaying all resources in a specific category in a specific course */
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
    <p className="text-align-center">Looks like there are no resources yet.</p>
  )
);

ResourceList.propTypes = {
    /** The courseId of the course containing the resource */
    courseId: React.PropTypes.string.isRequired,
    /** The categoryId of the category containing the resource */
    categoryId: React.PropTypes.string.isRequired,
    /** An array of resource objects */
    resources: React.PropTypes.array.isRequired
};

export default ResourceList;
