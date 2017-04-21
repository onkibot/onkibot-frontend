import reduxCrud from 'redux-crud';

const externalResources = reduxCrud.List.reducersFor('externalResources', {
    key: 'externalResourceId'
});

export default externalResources;
