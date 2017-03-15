import reduxCrud from 'redux-crud';

const courses = reduxCrud.List.reducersFor('categories', {
    key: 'categoryId'
});

export default courses;
