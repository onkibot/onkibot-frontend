import reduxCrud from 'redux-crud';

const externalResources = reduxCrud.List.reducersFor('externalResources', {
    key: 'externalResourceId'
});

const actualExternalResources = (state, action) => {
    const result = externalResources(state, action);
    switch (action.type) {
        case 'SET_EXTERNAL_RESOURCE_APPROVAL':
            return result.map((externalResource) => {
                if (externalResource.externalResourceId == action.externalResourceId) {
                    return {
                        ...externalResource,
                        myApproval: action.approval,
                        approvalCount: externalResource.approvalCount + (action.approval ? 1 : -1)
                    };
                } else {
                    return externalResource;
                }
            });
        default:
            return result;
    }
};

export default actualExternalResources;
