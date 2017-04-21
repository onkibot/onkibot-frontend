import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

let AddExternalResourceForm = ({ handleSubmit, errorMsg }) => (
  <form onSubmit={handleSubmit} className="form-style create-resource">
    <Field
      component={TextField}
      name="title"
      fullWidth={true}
      floatingLabelText="Title"
    />
    <Field
      component={TextField}
      name="comment"
      fullWidth={true}
      floatingLabelText="Comment"
    />
    <Field
      component={TextField}
      name="url"
      fullWidth={true}
      floatingLabelText="URL"
    />

    <RaisedButton
      label="Add External Resource"
      type="submit"
      className="float-right"
      style={{
          marginTop: '20px',
          margin: '20px auto',
          padding: '0px'
      }}
    />
    {errorMsg &&
    <p className="error-msg">{errorMsg}</p>
        }
    <div className="clearfix" />
  </form>
);

AddExternalResourceForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    errorMsg: React.PropTypes.string
};

AddExternalResourceForm = reduxForm({
    form: 'addExternalResource'
})(AddExternalResourceForm);

export default AddExternalResourceForm;
