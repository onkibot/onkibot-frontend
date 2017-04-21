import React from 'react';
import { List, ListItem, Toggle } from 'material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';

const ExternalResourceApprovalList = ({ externalResources, onApproval }) => (
  <List>
    {externalResources.map(externalResource => (
      <div key={externalResource.url}>
        <ListItem
          leftIcon={<CodeCell />}
          rightToggle={<Toggle onToggle={() => onApproval(externalResource.externalResourceId)} />}
          primaryText={externalResource.comment}
          secondaryText={externalResource.title}
        />
      </div>
        ))}
  </List>
);

export default ExternalResourceApprovalList;
