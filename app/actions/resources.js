import reduxCrud from 'redux-crud';
import cuid from 'cuid';

import { fetchSuccess as externalResourcesFetchSuccess } from './externalResources';
import { fetchSuccess as resourceFeedbackFetchSuccess } from './resourceFeedback';
import { setError } from './error';

const actionCreators = reduxCrud.actionCreatorsFor('resources', {
    key: 'resourceId'
});

export const fetchSuccess = (dispatch, resources) => {
    dispatch(actionCreators.fetchSuccess(resources.map(it => ({
        ...it,
        myFeedback: it.myFeedback ? it.myFeedback.resourceFeedbackId : null
    }))));
    resources.forEach((resource) => {
        externalResourcesFetchSuccess(dispatch, resource.externalResources);
        if (resource.myFeedback) {
            resourceFeedbackFetchSuccess(dispatch, [resource.myFeedback]);
        }
        resourceFeedbackFetchSuccess(dispatch, resource.feedback);
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
    .then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then((json) => {
                throw json;
            });
        }
    })
    .then((returnedResource) => {
        dispatch(actionCreators.createSuccess(returnedResource, cid));
        externalResourcesFetchSuccess(dispatch, returnedResource.externalResources);
    })
    .catch((err) => {
        dispatch(actionCreators.createError(err, resource));
        dispatch(setError(err));
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
