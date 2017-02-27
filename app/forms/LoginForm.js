import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="form-style">
          <Field
            component={TextField}
            name="username"
            fullWidth={true}
            floatingLabelText="Username"/>
          <Field
            component={TextField}
            name="email"
            fullWidth={true}
            floatingLabelText="E-mail"/>
          <Field
            component={TextField}
            name="password"
            fullWidth={true}
            floatingLabelText="Password"
            type="password"/>
            <div>
                <RaisedButton
                  label="Log in"
                  type="submit"
                  className="place-mid"
                  style = {{
                    marginTop: '20px',
                    width: '150px',
                    margin: '20px auto'
                  }}/>
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
