import reduxCrud from 'redux-crud';
import cuid from 'cuid';
import { fetchSuccess as resourcesFetchSuccess } from './resources';

const actionCreators = reduxCrud.actionCreatorsFor('categories', {
    key: 'categoryId'
});

export const fetchSuccess = (dispatch, categories) => {
    dispatch(actionCreators.fetchSuccess(categories));
    categories.forEach((category) => {
        resourcesFetchSuccess(dispatch, category.resources);
    });
};

export const createCategory = (courseId, categoryInfo) => ((dispatch) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(categoryInfo)
    };

    const cid = cuid();
    const category = {
        ...categoryInfo,
        categoryId: cid
    };

    dispatch(actionCreators.createStart(category));

    return fetch(`/api/v1/courses/${courseId}/categories`, config)
    .then(response => response.json())
    .then((returnedCategory) => {
        dispatch(actionCreators.createSuccess(returnedCategory, cid));
    })
    .catch((err) => {
        dispatch(actionCreators.createError(err, category));
    });
});

export const fetchCategories = courseId => ((dispatch) => {
    const config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    };

    dispatch(actionCreators.fetchStart());

    return fetch(`/api/v1/courses/${courseId}/categories`, config)
    .then(response => response.json())
    .then((categories) => {
        fetchSuccess(dispatch, categories);
    })
    .catch((err) => {
        dispatch(actionCreators.createError(err));
    });
});
