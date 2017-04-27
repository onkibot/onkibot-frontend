import { setError } from './error';

const doSetCourseAttendance = (userId, courseId, attending) => ({
    type: 'SET_COURSE_ATTENDANCE',
    userId,
    courseId,
    attending
});

const setCourseAttendance = (userId, courseId, attending) => ((dispatch) => {
    const config = {
        method: attending ? 'PUT' : 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    };

    return fetch(`/api/v1/courses/${courseId}/attendees/${userId}`, config)
    .then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve();
        } else {
            return response.json().then((json) => {
                throw json;
            });
        }
    })
    .then(() => {
        dispatch(doSetCourseAttendance(userId, courseId, attending));
    })
    .catch(err => setError(err));
});

export default setCourseAttendance;
