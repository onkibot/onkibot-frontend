import reduxCrud from 'redux-crud';

import { setError } from './error';

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
    .then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then((json) => {
                throw json;
            });
        }
    })
    .then((users) => {
        fetchSuccess(dispatch, users);
    })
    .catch((err) => {
        dispatch(actionCreators.fetchError(err));
        dispatch(setError(err));
    });
});
