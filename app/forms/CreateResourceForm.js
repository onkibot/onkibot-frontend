/* eslint react/no-array-index-key: "off" */
// Redux-form unfortunately provides no way to avoid the anti-pattern
import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Card, CardHeader, CardActions, CardText, RaisedButton } from 'material-ui';
import Clear from 'material-ui/svg-icons/content/clear';
import { TextField } from 'redux-form-material-ui';
import { connect } from 'react-redux';
import { isWebUri } from 'valid-url';

import { createResource } from '../actions/resources';

const validate = ({ name, body, externalResources }) => {
    const errors = {};
    if (!name) {
        errors.name = 'Required';
    } else if (name.length > 50) {
        errors.name = 'Must be less than 50 characters';
    }
    if (!body) {
        errors.body = 'Required';
    }
    if (externalResources) {
        const externalResourceErrorsArray = [];
        const indicesByURL = {};
        externalResources.forEach(({ title, comment, url }, index) => {
            indicesByURL[url] = [...(indicesByURL[url] || []), index];

            const externalResourceErrors = {};
            if (!title) {
                externalResourceErrors.title = 'Required';
            } else if (title.length > 50) {
                externalResourceErrors.title = 'Must be less than 50 characters';
            }
            if (!comment) {
                externalResourceErrors.comment = 'Required';
            }
            if (!url) {
                externalResourceErrors.url = 'Required';
            } else if (url.length > 2083) {
                externalResourceErrors.url = 'Must be less than 2083 characters';
            } else if (!isWebUri(url)) {
                errors.url = 'Must be valid URL';
            }
            externalResourceErrorsArray[index] = externalResourceErrors;
        });

        Object.keys(indicesByURL).forEach((url) => {
            const indices = indicesByURL[url];
            if (indices.length > 1) {
                indices.forEach((index) => {
                    externalResourceErrorsArray[index].url = 'Must be unique';
                });
            }
        });

        if (externalResourceErrorsArray.length > 0) {
            errors.externalResources = externalResourceErrorsArray;
        }
    }
    return errors;
};

const ExternalResources = ({ fields }) => (
  <div>
    <CardActions>
      <RaisedButton
        label="Attach external resource"
        onClick={() => fields.push({})}
      />
      <RaisedButton
        label="Submit Resource"
        type="submit"
        className="place-mid"
      />
    </CardActions>
    {fields.map((externalResource, index) => (
      <Card
        key={index}
        style={{ marginTop: '20px' }}
      >
        <CardHeader
          title={`External resource #${index + 1}`}
          avatar={<Clear
            onClick={() => fields.remove(index)}
          />}
          style={{
              cursor: 'pointer'
          }}
        />
        <CardText>
          <div className="form-style">
            <Field
              component={TextField}
              name={`${externalResource}.title`}
              hintText="Title"
              fullWidth={true}
            />
            <Field
              component={TextField}
              name={`${externalResource}.comment`}
              hintText="Comment"
              fullWidth={true}
            />
            <Field
              component={TextField}
              name={`${externalResource}.url`}
              hintText="URL"
              fullWidth={true}
            />
          </div>
        </CardText>
      </Card>
    ))}
  </div>
);

ExternalResources.propTypes = {
    fields: React.PropTypes.object.isRequired
};

let CreateResourceForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form-style create-resource">
    <Field
      component={TextField}
      name="name"
      fullWidth={true}
      floatingLabelText="Name"
    />
    <Field
      component={TextField}
      name="body"
      hintText="Body"
      multiLine={true}
      fullWidth={true}
      rows={3}
    />
    <Field
      component={TextField}
      name="comment"
      hintText="Instructors' comment"
      multiLine={true}
      fullWidth={true}
    />
    <FieldArray
      name="externalResources"
      component={ExternalResources}
    />
  </form>
);

CreateResourceForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    pristine: React.PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch, { courseId, categoryId, router }) => ({
    onSubmit: (resourceInfo) => {
        dispatch(createResource(courseId, categoryId, {
            ...resourceInfo,
            externalResources: resourceInfo.externalResources || []
        }));
        router.push(`/courses/${courseId}/categories/${categoryId}/resources/`);
    }
});

CreateResourceForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'createResource',
    validate
})(CreateResourceForm));

export default CreateResourceForm;
