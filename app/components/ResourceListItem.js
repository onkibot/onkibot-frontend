import React from 'react';
import { ListItem } from 'material-ui';
import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline';

const ResourceListItem = ({ name, body }) => (
  <ListItem primaryText={name} secondaryText={body} leftIcon={<LightBulb />} />
);

export default ResourceListItem;
