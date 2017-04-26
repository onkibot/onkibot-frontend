import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

import { createExternalResource } from '../actions/externalResources';

const mapDispatchToProps = (dispatch, { resetForm, courseId, categoryId, resourceId }) => ({
    onSubmit: (externalResourceInfo) => {
        dispatch(createExternalResource(courseId, categoryId, resourceId, externalResourceInfo));
        resetForm();
    }
});

let SuggestExternalResourceForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form-style">
    <Field
      component={TextField}
      name="title"
      hintText="Title"
    />
    <Field
      component={TextField}
      name="comment"
      hintText="Comment"
    />
    <Field
      component={TextField}
      name="url"
      hintText="URL"
    />
    <RaisedButton
      label="Suggest external resource"
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

SuggestExternalResourceForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
};

SuggestExternalResourceForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'suggest_resource'
})(SuggestExternalResourceForm));

export default SuggestExternalResourceForm;
