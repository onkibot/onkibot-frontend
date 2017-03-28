import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

import { addCategory } from '../actions';

const mapDispatchToProps = (dispatch, { courseId, router }) => ({
    onSubmit: (categoryInfo) => {
        const categoryInfoClone = categoryInfo;
        categoryInfoClone.courseId = courseId;
        dispatch(addCategory(categoryInfoClone));
        router.push(`/courses/${courseId}/categories`);
    }
});

let CreateCategoryForm = (props) => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit} className="form-style">
        <Field
          name="name"
          fullWidth={true}
          component={TextField}
          floatingLabelText="Category name"
        />
        <Field
          name="description"
          fullWidth={true}
          component={TextField}
          floatingLabelText="Category description"
        />
        <RaisedButton
          label="Create Category"
          type="submit"
          fullWidth={true}
          style={{
              marginTop: '20px',
              margin: '20px auto',
              padding: '0px'
          }}
        />
      </form>
    );
};

CreateCategoryForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'create_category'
})(CreateCategoryForm));

export default CreateCategoryForm;
