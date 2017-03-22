import reduxCrud from 'redux-crud';
import cuid from 'cuid';
import {actionCreators as categoriesActionCreators} from './categories';

export const actionCreators = reduxCrud.actionCreatorsFor('courses', {
    key: 'courseId'
});

export const createCourse = (course) => {
    return (dispatch) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(course)
        };

        const cid = cuid();
        course = {
            ...course,
            courseId: cid
        };

        dispatch(actionCreators.createStart(course));

        return fetch('/api/v1/courses', config)
        .then((response) => {
            return response.json();
        })
        .then((returnedCourse) => {
            dispatch(actionCreators.createSuccess(returnedCourse, cid));
        })
        .catch((err) => {
            dispatch(actionCreators.createError(err, course));
        });
    };
};

export const fetchCourses = () => {
    return (dispatch) => {
        const config = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'same-origin'
        };

        dispatch(actionCreators.fetchStart());

        return fetch('/api/v1/courses', config)
        .then((response) => {
            return response.json();
        })
        .then((courses) => {
            dispatch(actionCreators.fetchSuccess(courses))

            const flatCategories = courses.map((course) => {
                return course.categories;
            }).reduce((acc, categories) => {
                return [...acc, ...categories];
            }, [])
            dispatch(categoriesActionCreators.fetchSuccess(flatCategories));
        })
        .catch((err) => {
            dispatch(actionCreators.fetchError(err))
        });
    };
};