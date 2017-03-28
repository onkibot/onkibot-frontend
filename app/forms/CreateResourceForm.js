import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

let CreateResourceForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form-style create-resource">

    <Field
      component={TextField}
      name="resourceTitle"
      fullWidth={true}
      floatingLabelText="Title"
    />
    <Field
      component={TextField}
      name="resourceComment"
      floatingLabelText="Comment to resource"
      multiLine={true}
      fullWidth={true}
      rows={1}
    />
    <RaisedButton
      label="Add Resource"
      type="submit"
      className="place-mid"
      style={{
          marginTop: '20px',
          width: '150px',
          margin: '20px auto',
          padding: '0px'
      }}
    />
  </form>
);

CreateResourceForm = reduxForm({
    form: 'createResource'
})(CreateResourceForm);

export default CreateResourceForm;
