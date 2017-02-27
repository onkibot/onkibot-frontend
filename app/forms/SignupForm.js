import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { MenuItem, RaisedButton } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';

const SignupForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="form-style">
          <Field
            component={SelectField}
            name="usertype"
            fullWidth={true}
            floatingLabelText="I am a...">
              <MenuItem value="student" primaryText="Student" />
              <MenuItem value="instructor" primaryText="Instructor" />
          </Field>
          <Field
            component={TextField}
            name="name"
            fullWidth={true}
            floatingLabelText="Name"/>
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
          <Field
            component={TextField}
            name="confirmPassword"
            fullWidth={true}
            floatingLabelText="Confirm Password"
            type="password"/>
            <div>
                <RaisedButton
                  label="Sign Up"
                  type="submit"
                  className="place-mid"
                  style = {{
                    marginTop: '20px',
                    width: '150px',
                    margin: '20px auto',
                    padding: '0px'
                  }}/>
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
