import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';

import { loginUser } from '../actions';

const mapDispatchToProps = dispatch => ({
    onSubmit: (credentials) => {
        dispatch(loginUser(credentials));
    }
});

let LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit} className="form-style">
        <Field
          component={TextField}
          name="email"
          fullWidth={true}
          floatingLabelText="E-mail"
        />
        <Field
          component={TextField}
          name="password"
          fullWidth={true}
          floatingLabelText="Password"
          type="password"
        />
        <div>
          <RaisedButton
            label="Log in"
            type="submit"
            className="place-mid"
            style={{
                marginTop: '20px',
                width: '150px',
                margin: '20px auto',
                padding: '0px'
            }}
          />
        </div>
      </form>
    );
};

LoginForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'login'
})(LoginForm));

export default LoginForm;
