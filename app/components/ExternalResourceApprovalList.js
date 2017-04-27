import React from 'react';
import { List, ListItem, Toggle } from 'material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';

/** The list of external resources used by instructors to approve external resources for a specific resource */
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
    /** An array of externalResource objects */
    externalResources: React.PropTypes.array.isRequired,
    /** A function called whenever the approval of an external resource changes.
    /*  Gets passed an externalResourceId and a bool set true if approved and false if not.
    */
    onApproval: React.PropTypes.func.isRequired
};

export default ExternalResourceApprovalList;
