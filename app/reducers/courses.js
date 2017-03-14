const courses = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    description: action.description,
                    categories: []
                }
            ];

        case 'ADD_CATEGORY':
            return state.map((course) => {
                if (course.id == action.courseId) {
                    return {
                        ...course,
                        categories: [
                            ...course.categories,
                            {
                                id: action.id,
                                name: action.name,
                                description: action.description,
                                resources: []
                            }
                        ]
                    };
                } else {
                    return course;
                }
            });

        default:
            return state;
    }
};

export default courses;
