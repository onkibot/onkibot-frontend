const doSetCourseAttendance = (userId, courseId, attending) => {
    return {
      type: 'SET_COURSE_ATTENDANCE',
      userId,
      courseId,
      attending
    }
};

export const setCourseAttendance = (userId, courseId, attending) => ((dispatch) => {
    const config = {
        method: attending ? 'PUT' : 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    };

    return fetch(`/api/v1/courses/${courseId}/attendees/${userId}`, config)
    .then(() => {
        dispatch(doSetCourseAttendance(userId, courseId, attending));
    })
});
