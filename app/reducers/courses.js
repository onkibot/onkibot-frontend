import reduxCrud from 'redux-crud';

const courses = reduxCrud.List.reducersFor('courses', {
    key: 'courseId'
});

const actualCourses = (state, action) => {
    const result = courses(state, action);
    switch (action.type) {
        case 'SET_COURSE_ATTENDANCE':
            return result.map((course) => {
                if (course.courseId == action.courseId) {
                    if (action.attending) {
                        return {
                            ...course,
                            attendees: [
                                ...course.attendees,
                                action.userId
                            ]
                        };
                    } else {
                        return {
                            ...course,
                            attendees: course.attendees.filter(userId => userId != action.userId)
                        };
                    }
                } else {
                    return course;
                }
            });
        default:
            return result;
    }
};

export default actualCourses;
