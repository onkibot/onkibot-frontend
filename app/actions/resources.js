import reduxCrud from 'redux-crud';
import cuid from 'cuid';
import { fetchSuccess as externalResourcesFetchSuccess } from './externalResources';

const actionCreators = reduxCrud.actionCreatorsFor('resources', {
    key: 'resourceId'
});

export const fetchSuccess = (dispatch, resources) => {
    dispatch(actionCreators.fetchSuccess(resources));
    resources.forEach((resource) => {
        externalResourcesFetchSuccess(dispatch, resource.externalResources);
    });
};

export const createResource = (courseId, categoryId, resourceInfo) => ((dispatch) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(resourceInfo)
    };

    const cid = cuid();
    const resource = {
        ...resourceInfo,
        resourceId: cid
    };

    dispatch(actionCreators.createStart(resource));

    return fetch(`/api/v1/courses/${courseId}/categories/${categoryId}/resources`, config)
    .then(response => response.json())
    .then((returnedResource) => {
        dispatch(actionCreators.createSuccess(returnedResource, cid));
        externalResourcesFetchSuccess(dispatch, returnedResource.externalResources);
    })
    .catch((err) => {
        dispatch(actionCreators.createError(err, resource));
    });
});

export const fetchResources = (courseId, categoryId) => ((dispatch) => {
    const config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    };

    dispatch(actionCreators.fetchStart());

    return fetch(`/api/v1/courses/${courseId}/categories/${categoryId}/resources`, config)
    .then(response => response.json())
    .then((resources) => {
        fetchSuccess(dispatch, resources);
    })
    .catch((err) => {
        dispatch(actionCreators.fetchError(err));
    });
});

const doSetResourceFeedback = (resourceId, feedback) => ({
    type: 'SET_RESOURCE_FEEDBACK',
    resourceId,
    feedback
});

export const setResourceFeedback = (courseId, categoryId, resourceId, feedbackInfo) => ((dispatch) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(feedbackInfo)
    };

    return fetch(`/api/v1/courses/${courseId}/categories/${categoryId}/resources/${resourceId}/feedback`, config)
    .then(response => response.json())
    .then((returnedFeedback) => {
        dispatch(doSetResourceFeedback(resourceId, returnedFeedback));
    });
});
