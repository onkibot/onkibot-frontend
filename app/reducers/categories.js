import reduxCrud from 'redux-crud';

const categories = reduxCrud.List.reducersFor('categories', {
    key: 'categoryId'
});

export default categories;
