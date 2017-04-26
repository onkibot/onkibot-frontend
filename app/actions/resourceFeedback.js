import reduxCrud from 'redux-crud';
import cuid from 'cuid';

import { setError } from './error';

const actionCreators = reduxCrud.actionCreatorsFor('resourceFeedback', {
    key: 'resourceFeedbackId'
});

export const fetchSuccess = (dispatch, resourceFeedback) => {
    dispatch(actionCreators.fetchSuccess(resourceFeedback));
};

export const createResourceFeedback = (courseId, categoryId, resourceId, resourceFeedbackInfo) => ((dispatch) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(resourceFeedbackInfo)
    };

    const cid = cuid();
    const resourceFeedback = {
        ...resourceFeedbackInfo,
        resourceFeedbackId: cid
    };

    dispatch(actionCreators.createStart(resourceFeedback));

    return fetch(`/api/v1/courses/${courseId}/categories/${categoryId}/resources/${resourceId}/feedback`, config)
    .then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then((json) => {
                throw json;
            });
        }
    })
    .then((returnedResourceFeedback) => {
        dispatch(actionCreators.createSuccess(returnedResourceFeedback, cid));
    })
    .catch((err) => {
        dispatch(actionCreators.createError(err, resourceFeedback));
        dispatch(setError(err));
    });
});
