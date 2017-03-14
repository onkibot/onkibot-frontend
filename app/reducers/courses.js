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
        default:
            return state;

        case 'ADD_CATEGORY':
            var newState = [...state]
            var course = newState.find((course) => course.id == action.courseId);
            course.categories.push({
                id: action.id,
                name: action.name,
                description: action.description,
                resources: []
            });
            return newState;
    }
};

export default courses;
