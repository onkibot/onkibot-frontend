import React from 'react';
import { ListItem } from 'material-ui';
import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline';

const ResourceListItem = ({ title, comment }) => (
    <ListItem primaryText={title} secondaryText={comment} leftIcon={<LightBulb/>}/>
)

export default ResourceListItem
