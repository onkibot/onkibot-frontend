import reduxCrud from 'redux-crud';

const actionCreators = reduxCrud.actionCreatorsFor('users', {
    key: 'userId'
});

export const fetchSuccess = (dispatch, users) => {
    dispatch(actionCreators.fetchSuccess(users));
};

export const fetchUsers = () => ((dispatch) => {
    const config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    };

    dispatch(actionCreators.fetchStart());

    return fetch('/api/v1/users', config)
    .then(response => response.json())
    .then((users) => {
        fetchSuccess(dispatch, users);
    })
    .catch((err) => {
        dispatch(actionCreators.fetchError(err));
    });
});
