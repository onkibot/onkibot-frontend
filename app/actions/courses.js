import reduxCrud from 'redux-crud';
import cuid from 'cuid';

import { setError } from './error';
import { fetchSuccess as categoriesFetchSuccess } from './categories';
import { fetchSuccess as usersFetchSuccess } from './users';

const actionCreators = reduxCrud.actionCreatorsFor('courses', {
    key: 'courseId'
});

export const fetchSuccess = (dispatch, courses) => {
    dispatch(actionCreators.fetchSuccess(courses.map((course) => {
        categoriesFetchSuccess(dispatch, course.categories);
        usersFetchSuccess(dispatch, course.attendees);
        return {
            ...course,
            attendees: course.attendees.map(user => user.userId)
        };
    })));
};

export const createCourse = courseInfo => ((dispatch) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(courseInfo)
    };

    const cid = cuid();
    const course = {
        ...courseInfo,
        courseId: cid
    };

    dispatch(actionCreators.createStart(course));

    return fetch('/api/v1/courses', config)
    .then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then((json) => {
                throw json;
            });
        }
    })
    .then((returnedCourse) => {
        dispatch(actionCreators.createSuccess(returnedCourse, cid));
    })
    .catch((err) => {
        dispatch(actionCreators.createError(err, course));
        dispatch(setError(err));
    });
});

export const fetchCourses = () => ((dispatch) => {
    const config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    };

    dispatch(actionCreators.fetchStart());

    return fetch('/api/v1/courses', config)
    .then(response => response.json())
    .then((courses) => {
        fetchSuccess(dispatch, courses);
    })
    .catch((err) => {
        dispatch(actionCreators.fetchError(err));
    });
});
