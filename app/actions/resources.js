import reduxCrud from 'redux-crud';
import cuid from 'cuid';

const actionCreators = reduxCrud.actionCreatorsFor('resources', {
    key: 'resourceId'
});

export const fetchSuccess = (dispatch, resources) => {
    dispatch(actionCreators.fetchSuccess(resources));
};

export const createResource = (courseId, categoryId, resource) => {
    return (dispatch) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(resource)
        };

        const cid = cuid();
        resource = {
            ...resource,
            resourceId: cid
        };

        dispatch(actionCreators.createStart(resource));

        return fetch(`/api/v1/courses/${courseId}/categories/${categoryId}/resources`, config)
        .then((response) => {
            return response.json();
        })
        .then((returnedResource) => {
            dispatch(actionCreators.createSuccess(returnedResource, cid));
        })
        .catch((err) => {
            dispatch(actionCreators.createError(err, category));
        });
    };
};

export const fetchResources = (courseId, categoryId) => {
    return (dispatch) => {
        const config = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'same-origin'
        };

        dispatch(actionCreators.fetchStart());

        return fetch(`/api/v1/courses/${courseId}/categories/${categoryId}/resources`, config)
        .then((response) => {
            return response.json();
        })
        .then((resources) => {
            fetchSuccess(dispatch, resources);
        })
        .catch((err) => {
            dispatch(actionCreators.fetchError(err))
        });
    };
};