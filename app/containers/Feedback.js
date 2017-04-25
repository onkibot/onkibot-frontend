/* eslint max-len: ["error", 255] */
import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';

import { setResourceFeedback } from '../actions/resources';
import { setExternalResourceApproval } from '../actions/externalResources';
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

const mapStateToProps = (state, { resourceId }) => {
    const resource = state.resources.find(it => it.resourceId == resourceId);
    return {
        externalResources: resource.externalResources
    };
};

const mapDispatchToProps = (dispatch, { courseId, categoryId, resourceId }) => ({
    onSubmit: (feedback) => {
        dispatch(setResourceFeedback(courseId, categoryId, resourceId, feedback));
    },
    onApproval: (externalResourceId, approval) => {
        dispatch(setExternalResourceApproval(courseId, categoryId, resourceId, externalResourceId, approval));
    }
});

Feedback = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feedback);

export default Feedback;
