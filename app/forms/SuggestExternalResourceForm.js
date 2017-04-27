import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';
import { isWebUri } from 'valid-url';

import { createExternalResource } from '../actions/externalResources';

const validate = ({ title, comment, url }, { externalResources }) => {
    const errors = {};
    if (!title) {
        errors.title = 'Required';
    } else if (title.length > 50) {
        errors.title = 'Must be less than 50 characters';
    }
    if (!comment) {
        errors.comment = 'Required';
    }
    if (!url) {
        errors.url = 'Required';
    } else if (externalResources.some(it => it.url == url)) {
        errors.url = 'Already an external resource';
    } else if (!isWebUri(url)) {
        errors.url = 'Must be valid URL';
    }
    return errors;
};

const mapDispatchToProps = (dispatch, { courseId, categoryId, resourceId }) => ({
    onSubmit: (externalResourceInfo) => {
        dispatch(createExternalResource(courseId, categoryId, resourceId, externalResourceInfo));
        dispatch(reset('suggest_resource'));
    }
});

let SuggestExternalResourceForm = ({ handleSubmit, pristine }) => (
  <form onSubmit={handleSubmit} className="form-style">
    <Field
      component={TextField}
      name="title"
      hintText="Title"
    />
    <Field
      component={TextField}
      name="comment"
      hintText="Comment"
    />
    <Field
      component={TextField}
      name="url"
      hintText="URL"
    />
    <RaisedButton
      label="Suggest external resource"
      type="submit"
      fullWidth={true}
      disabled={pristine}
      style={{
          marginTop: '20px',
          margin: '20px auto',
          padding: '0px'
      }}
    />
  </form>
);

SuggestExternalResourceForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    pristine: React.PropTypes.bool.isRequired
};

SuggestExternalResourceForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'suggest_resource',
    validate
})(SuggestExternalResourceForm));

export default SuggestExternalResourceForm;
