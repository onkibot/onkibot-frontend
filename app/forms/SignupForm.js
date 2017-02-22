import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { MenuItem, RaisedButton } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';

const SignupForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="usertype" component={SelectField} floatingLabelText="I am a...">
                    <MenuItem value="student" primaryText="Student" />
                    <MenuItem value="instructor" primaryText="Instructor" />
                </Field>
            </div>
            <div>
                <Field name="name" component={TextField} floatingLabelText="Name" />
            </div>
            <div>
                <Field name="email" component={TextField} floatingLabelText="Email" type="email" />
            </div>
            <div>
                <Field name="password" component={TextField} floatingLabelText="Password" type="password" />
            </div>
            <div>
                <Field name="confirmPassword" component={TextField} floatingLabelText="Confirm password" type="password" />
            </div>
            <div>
                <RaisedButton label="Sign up" type="submit" />
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'signup',
    onSubmit: (values) => {
        console.log(values);
    }
})(SignupForm);