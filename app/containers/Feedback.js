import React from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'material-ui';

import { sendFeedback } from '../actions/feedback';
import FeedbackForm from '../forms/FeedbackForm';

let Feedback = ({ onSubmit, onApproval, handleClose, externalResources }) => (
  <Dialog
    title="Give feedback"
    modal={false}
    open={true}
    onRequestClose={handleClose}
  >
    <FeedbackForm onSubmit={onSubmit} handleCancel={handleClose} externalResources={externalResources} onApproval={onApproval} />
  </Dialog>
);

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
    onApproval: (externalResourceId) => {
        console.log(externalResourceId);
    }
});

Feedback = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feedback);

export default Feedback;
