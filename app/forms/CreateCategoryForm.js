import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

import { createCategory } from '../actions/categories';

const validate = ({ name, description }) => {
    const errors = {};
    if (!name) {
        errors.name = 'Required';
    } else if (name.length > 50) {
        errors.name = 'Must be less than 50 characters';
    }
    if (!description) {
        errors.description = 'Required';
    }
    return errors;
};

const mapDispatchToProps = (dispatch, { courseId, router }) => ({
    onSubmit: (categoryInfo) => {
        dispatch(createCategory(courseId, categoryInfo));
        router.push(`/courses/${courseId}/categories`);
    }
});

let CreateCategoryForm = ({ handleSubmit, pristine }) => (
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
      disabled={pristine}
      style={{
          marginTop: '20px',
          margin: '20px auto',
          padding: '0px'
      }}
    />
  </form>
);

CreateCategoryForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    pristine: React.PropTypes.bool.isRequired
};

CreateCategoryForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'create_category',
    validate
})(CreateCategoryForm));

export default CreateCategoryForm;
