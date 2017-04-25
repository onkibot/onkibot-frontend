/* eslint max-len: ["error", 255] */
import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';

import { sendFeedback, externalResourceApproval } from '../actions/feedback';
import FeedbackForm from '../forms/FeedbackForm';

let Feedback = ({ onSubmit, handleClose, externalResources, onApproval, courseId, categoryId, resourceId }) => (
  <Dialog
    title="Give feedback"
    modal={false}
    open={true}
    onRequestClose={handleClose}
  >
    <FeedbackForm
      onSubmit={onSubmit}
      handleCancel={handleClose}
      externalResources={externalResources}
      onApproval={onApproval}
      courseId={courseId}
      categoryId={categoryId}
      resourceId={resourceId}
    />
  </Dialog>
);

/* Finner externalResources for å sende inn i FeedbackForm slik at en kan lage approval list */
const mapStateToProps = (state, ownProps) => {
    const stateCourse = state.courses.find(course => course.courseId == ownProps.courseId);
    const stateCategory = stateCourse.categories.find(category => category.categoryId == ownProps.categoryId);
    const stateResource = stateCategory.resources.find(resource => resource.resourceId == ownProps.resourceId);
    return {
        externalResources: stateResource.externalResources
    };
};

const mapDispatchToProps = dispatch => ({
    onSubmit: (feedback) => {
        dispatch(sendFeedback(feedback));
    },
    onApproval: (externalResourceId, courseId, categoryId, resourceId) => {
        dispatch(externalResourceApproval(externalResourceId, courseId, categoryId, resourceId));
    }
});

Feedback = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feedback);

export default Feedback;
