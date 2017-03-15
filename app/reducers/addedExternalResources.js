const addedExternalResources = (state = [], action) => {
    switch (action.type) {
        case 'ADDED_EXTERNAL_RESOURCES_CREATE':
            return [
                ...state,
                action.externalResource
            ];
        case 'ADDED_EXTERNAL_RESOURCES_DELETE':
            return state.filter((externalResource) => externalResource.url != action.url)
        case 'ADDED_EXTERNAL_RESOURCES_CLEAR':
            return [];
        default:
            return state;
    }
};

export default addedExternalResources;