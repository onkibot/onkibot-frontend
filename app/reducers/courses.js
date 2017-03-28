const initCourse = [{
    id: 1245,
    name: 'Java',
    description: 'This is Java',
    categories: [{
        id: 352,
        name: 'JavaFX',
        description: 'This is JavaFX',
        resources: [{
            id: 556,
            categoryId: '0',
            comment: 'comment to for loop resource',
            courseId: '0',
            title: 'For-loop',
            externalResources: [{
                categoryId: '0',
                comment: 'stack comment',
                courseId: '0',
                title: 'For loop at stack',
                url: 'http://google.com'
            }]
        }]
    }]
}];

const courses = (state = initCourse, action) => {
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
                }
                return course;
            });

        case 'ADD_RESOURCE':
            return state.map((course) => {
                if (course.id == action.courseId) {
                    return {
                        ...course,
                        categories: course.categories.map((category) => {
                            if (category.id == action.categoryId) {
                                return {
                                    ...category,
                                    resources: [
                                        ...category.resources,
                                        {
                                            id: action.id,
                                            categoryId: action.categoryId,
                                            comment: action.comment,
                                            courseId: action.courseId,
                                            title: action.title,
                                            externalResources: action.externalResources
                                        }]
                                };
                            } else {
                                return category;
                            }
                        })
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
