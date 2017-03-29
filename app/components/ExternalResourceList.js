import React from 'react';
import { List, ListItem } from 'material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';
import Close from 'material-ui/svg-icons/navigation/close';

const ExternalResourceList = ({ externalResources, onRemove }) => (
  <List>
    {externalResources.map(externalResource => (
      <div key={externalResource.url}>
        {onRemove ?
          <ListItem
            leftIcon={<CodeCell />}
            rightIcon={onRemove && <Close onClick={() => onRemove(externalResource.url)} />}
            primaryText={externalResource.comment}
            secondaryText={externalResource.title}
          />
                :
                (
                  <a href={externalResource.url} target="_blank" rel="noopener noreferrer">
                    <ListItem
                      leftIcon={<CodeCell />}
                      primaryText={externalResource.comment}
                      secondaryText={externalResource.title}
                    />
                  </a>
                )
              }
      </div>
        ))}
  </List>
);

export default ExternalResourceList;
