import reduxCrud from 'redux-crud';

const resourceFeedback = reduxCrud.List.reducersFor('resourceFeedback', {
    key: 'resourceFeedbackId'
});

export default resourceFeedback;
