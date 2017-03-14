import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton, MenuItem, Card, CardHeader, ListItem } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';

let AddExternalResourceForm = ({handleSubmit, errorMsg}) => (
      <form onSubmit={handleSubmit} className="form-style create-resource">
        <Field
            component={TextField}
            name="title"
            fullWidth={true}
            floatingLabelText="Title"/>
        <Field
            component={TextField}
            name="comment"
            fullWidth={true}
            floatingLabelText="Comment"/>
        <Field
            component={TextField}
            name="url"
            fullWidth={true}
            floatingLabelText="URL"/>

        <RaisedButton
            label="Add External Resource"
            type="submit"
            className="float-right"
            style = {{
                marginTop: '20px',
                margin: '20px auto',
                padding: '0px'
            }}/>
        {errorMsg && 
            <p className="error-msg">{errorMsg}</p>
        }
        <div className="clearfix"></div>
    </form>
);

AddExternalResourceForm = reduxForm({
    form: 'addExternalResource'
})(AddExternalResourceForm);

export default AddExternalResourceForm;