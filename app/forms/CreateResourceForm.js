import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

let CreateResourceForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form-style create-resource">

    <Field
      component={TextField}
      name="name"
      fullWidth={true}
      floatingLabelText="Resource Name"
    />
    <Field
      component={TextField}
      name="body"
      floatingLabelText="Resource body"
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

CreateResourceForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
};

CreateResourceForm = reduxForm({
    form: 'createResource'
})(CreateResourceForm);

export default CreateResourceForm;
