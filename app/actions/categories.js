import reduxCrud from 'redux-crud';
import cuid from 'cuid';

const actionCreators = reduxCrud.actionCreatorsFor('categories', {
    key: 'categoryId'
});

export const createCategory = (courseId, category) => {
    return (dispatch) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(category)
        };

        const cid = cuid();
        category = {
            ...category,
            categoryId: cid
        };

        dispatch(actionCreators.createStart(category));

        return fetch(`/api/v1/courses/${courseId}/categories`, config)
        .then((response) => {
            return response.json();
        })
        .then((returnedCategory) => {
            dispatch(actionCreators.createSuccess(returnedCategory, cid));
        })
        .catch((err) => {
            dispatch(actionCreators.createError(err, category));
        });
    };
};

export const fetchCategories = (courseId) => {
    return (dispatch) => {
        const config = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'same-origin'
        };

        dispatch(actionCreators.fetchStart());

        return fetch(`/api/v1/courses/${courseId}/categories`, config)
        .then((response) => {
            return response.json();
        })
        .then((returnedCategories) => {
            dispatch(actionCreators.fetchSuccess(returnedCategories))
        })
        .catch((err) => {
            dispatch(actionCreators.createError(err))
        });
    };
};