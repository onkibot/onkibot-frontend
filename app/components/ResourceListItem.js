import React from 'react';
import { ListItem } from 'material-ui';
import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline';
import Done from 'material-ui/svg-icons/action/done';

const ResourceListItem = ({ name, body, hasMyFeedback }) => (
  <ListItem
    primaryText={name}
    secondaryText={body}
    leftIcon={<LightBulb />}
    rightIcon={hasMyFeedback ? <Done /> : null}
  />
);

ResourceListItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    hasMyFeedback: React.PropTypes.bool.isRequired
};

export default ResourceListItem;
