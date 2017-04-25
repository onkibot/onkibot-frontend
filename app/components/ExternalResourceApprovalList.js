import React from 'react';
import { List, ListItem, Toggle } from 'material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';

const ExternalResourceApprovalList = ({ externalResources, onApproval }) => (
  <List>
    {externalResources.map(externalResource => (
      <div key={externalResource.url}>
        <ListItem
          leftIcon={<CodeCell />}
          rightToggle={<Toggle
            defaultToggled={externalResource.myApproval}
            onToggle={(e, checked) => onApproval(externalResource.externalResourceId, checked)}
          />}
          primaryText={externalResource.comment}
          secondaryText={externalResource.title}
        />
      </div>
        ))}
  </List>
);

ExternalResourceApprovalList.propTypes = {
    externalResources: React.PropTypes.array.isRequired,
    onApproval: React.PropTypes.func.isRequired
};

export default ExternalResourceApprovalList;
