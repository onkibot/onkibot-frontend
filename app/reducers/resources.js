import reduxCrud from 'redux-crud';

const resources = reduxCrud.List.reducersFor('resources', {
    key: 'resourceId'
});

const actualResources = (state, action) => {
    const result = resources(state, action);
    switch (action.type) {
        case 'SET_RESOURCE_FEEDBACK':
            return result.map((resource) => {
                if (resource.resourceId == action.resourceId) {
                    return {
                        ...resource,
                        myFeedback: action.feedback
                    };
                } else {
                    return resource;
                }
            });
        default:
            return result;
    }
};

export default actualResources;
