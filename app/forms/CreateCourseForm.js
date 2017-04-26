import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

import { createCourse } from '../actions/courses';

const validate = ({ name, description }) => {
    const errors = {};
    if (!name) {
        errors.name = 'Required';
    } else if (name.length > 100) {
        errors.name = 'Must be less than 100 characters';
    }
    if (!description) {
        errors.description = 'Required';
    }
    return errors;
};

const mapDispatchToProps = (dispatch, { router }) => ({
    onSubmit: (courseInfo) => {
        dispatch(createCourse(courseInfo));
        router.push('/courses');
    }
});

let CreateCourseForm = ({ handleSubmit, pristine }) => {
    return (
      <form onSubmit={handleSubmit} className="form-style">
        <Field
          name="name"
          fullWidth={true}
          component={TextField}
          floatingLabelText="Course name"
        />
        <Field
          name="description"
          fullWidth={true}
          component={TextField}
          floatingLabelText="Course description"
        />
        <RaisedButton
          label="Create Course"
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
};

CreateCourseForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
};

CreateCourseForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'create_course',
    validate
})(CreateCourseForm));

export default CreateCourseForm;
