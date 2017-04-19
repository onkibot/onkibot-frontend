import reduxCrud from 'redux-crud';

const users = reduxCrud.List.reducersFor('users', {
    key: 'userId'
});

export default users;
