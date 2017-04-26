import reduxCrud from 'redux-crud';

const resources = reduxCrud.List.reducersFor('resources', {
    key: 'resourceId'
});

export default resources;
