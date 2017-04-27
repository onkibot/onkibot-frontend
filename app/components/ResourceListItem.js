import React from 'react';
import { ListItem } from 'material-ui';
import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline';
import Done from 'material-ui/svg-icons/action/done';

/** A list item for the resource list, displaying information about a specific resource */
const ResourceListItem = ({ name, body, hasMyFeedback }) => (
  <ListItem
    primaryText={name}
    secondaryText={body.length > 100 ? `${body.substring(0, 97)}...` : body}
    leftIcon={<LightBulb />}
    rightIcon={hasMyFeedback ? <Done /> : null}
  />
);

ResourceListItem.propTypes = {
    /** The name of the resource, passed as props */
    name: React.PropTypes.string.isRequired,
    /** The body of the resource, passed as props */
    body: React.PropTypes.string.isRequired,
    /** A bool set true if the logged in user has already given feedback on the resource */
    hasMyFeedback: React.PropTypes.bool.isRequired
};

export default ResourceListItem;
