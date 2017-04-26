import React from 'react';
import { List, ListItem } from 'material-ui';
import Face from 'material-ui/svg-icons/action/face';

const UserFeedbackList = ({ feedback }) => (
  <List>
    {feedback.map(it => (
      <ListItem
        leftIcon={<Face />}
        secondaryText={`Difficulty rating: ${it.difficulty}`}
        primaryText={it.comment}
      />
    ))}
  </List>
);

UserFeedbackList.propTypes = {
    feedback: React.PropTypes.array.isRequired
};

export default UserFeedbackList;
