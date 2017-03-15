import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

import { createCourse } from '../actions/courses';

const mapDispatchToProps = (dispatch, { router }) => ({
    onSubmit: (courseInfo) => {
        dispatch(addCourse(courseInfo));
        router.push('/courses');
    }
});

let CreateCourseForm = (props) => {
    const { handleSubmit } = props;
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
          style={{
              marginTop: '20px',
              margin: '20px auto',
              padding: '0px'
          }}
        />
      </form>
    );
};

CreateCourseForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'create_course'
})(CreateCourseForm));

export default CreateCourseForm;
