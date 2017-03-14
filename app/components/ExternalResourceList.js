import React from 'react';
import { List, ListItem } from 'material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';
import Close from 'material-ui/svg-icons/navigation/close';

const ExternalResourceList = ({externalResources, onRemove}) => (
    <List>
        {externalResources.map((externalResource) => (
            <ListItem
                key={externalResource.url}
                leftIcon={<CodeCell/>}
                rightIcon={onRemove && <Close onClick={() => onRemove(externalResource.url)}/>}
                primaryText={externalResource.comment}
                secondaryText={externalResource.title}
            />
        ))}
    </List>
);

export default ExternalResourceList;