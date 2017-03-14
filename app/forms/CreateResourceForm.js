import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton, MenuItem, Card, CardHeader, ListItem } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';
import Close from 'material-ui/svg-icons/navigation/close';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/dist/styles';

import AddExternalResourceForm from './AddExternalResourceForm';

let CreateResourceForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit} className="form-style create-resource">

        <Field
            component={TextField}
            name="resourceTitle"
            fullWidth={true}
            floatingLabelText="Title"/>
        <Field
            component={TextField}
            name="resourceComment"
            floatingLabelText="Comment to resource"
            multiLine={true}
            fullWidth={true}
            rows={1}/>
        <RaisedButton
            label="Add Resource"
            type="submit"
            className="place-mid"
            style = {{
                marginTop: '20px',
                width: '150px',
                margin: '20px auto',
                padding: '0px'
            }}/>
    </form>
);

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (resourceProps) => {
            console.log(resourceProps);
        }
    };
}

CreateResourceForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'createResource'
})(CreateResourceForm));

export default CreateResourceForm;
