import React from 'react';
import { List, ListItem } from 'material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';

/** The external resource list component, displaying all external resources of a resource */
const ExternalResourceList = ({ externalResources }) => (
  <List>
    {externalResources.map(externalResource => (
      <a
        key={externalResource.externalResourceId}
        href={externalResource.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItem
          leftIcon={<CodeCell />}
          primaryText={externalResource.comment}
          secondaryText={externalResource.title}
        />
      </a>
    ))}
  </List>
);

ExternalResourceList.propTypes = {
    externalResources: React.PropTypes.array.isRequired
};

export default ExternalResourceList;
