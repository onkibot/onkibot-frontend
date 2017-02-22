import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" component={TextField} floatingLabelText="Email" type="email" />
            </div>
            <div>
                <Field name="password" component={TextField} floatingLabelText="Password" type="password" />
            </div>
            <div>
                <RaisedButton label="Log in" type="submit" />
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'login',
    onSubmit: (values) => {
        console.log(values);
    }
})(LoginForm);