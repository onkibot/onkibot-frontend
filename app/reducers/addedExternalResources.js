const addedExternalResources = (state = [], action) => {
    switch (action.type) {
        case 'ADDED_EXTERNAL_RESOURCES_CREATE':
            return [
                ...state,
                {
                    categoryId: action.categoryId,
                    comment: action.externalResource.comment,
                    courseId: action.courseId,
                    title: action.externalResource.title,
                    url: action.externalResource.url
                }
            ];
        case 'ADDED_EXTERNAL_RESOURCES_DELETE':
            return state.filter(externalResource => externalResource.url !== action.url);
        case 'ADDED_EXTERNAL_RESOURCES_CLEAR':
            return [];
        default:
            return state;
    }
};

export default addedExternalResources;
