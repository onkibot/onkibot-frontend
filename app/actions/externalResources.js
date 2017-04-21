import reduxCrud from 'redux-crud';

const actionCreators = reduxCrud.actionCreatorsFor('externalResources', {
    key: 'externalResourceId'
});

export const fetchSuccess = (dispatch, externalResources) => {
    dispatch(actionCreators.fetchSuccess(externalResources));
};

export const fetchResources = (courseId, categoryId, resourceId) => ((dispatch) => {
    const config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    };

    dispatch(actionCreators.fetchStart());

    const resource = `/api/v1/courses/${courseId}/categories/${categoryId}/resources/${resourceId}`;
    return fetch(`${resource}/externalResources`, config)
    .then(response => response.json())
    .then((externalResources) => {
        fetchSuccess(dispatch, externalResources);
    })
    .catch((err) => {
        dispatch(actionCreators.fetchError(err));
    });
});
