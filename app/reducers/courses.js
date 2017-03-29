import reduxCrud from 'redux-crud';

const courses = reduxCrud.List.reducersFor('courses', {
    key: 'courseId'
});

export default courses;
