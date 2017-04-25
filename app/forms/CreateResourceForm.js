/* eslint react/no-array-index-key: "off" */
// Redux-form unfortunately provides no way to avoid the anti-pattern
import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Card, CardHeader, CardActions, CardText, RaisedButton } from 'material-ui';
import Clear from 'material-ui/svg-icons/content/clear';
import { TextField } from 'redux-form-material-ui';
import { connect } from 'react-redux';

import { createResource } from '../actions/resources';

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
      >
        <CardHeader
          title={`External resource #${index + 1}`}
          avatar={<Clear
            onClick={() => fields.remove(index)}
          />}
        />
        <CardText>
          <Field
            component={TextField}
            name={`${externalResource}.title`}
            hintText="Title"
          />
          <Field
            component={TextField}
            name={`${externalResource}.comment`}
            hintText="Comment"
          />
          <Field
            component={TextField}
            name={`${externalResource}.url`}
            hintText="URL"
          />
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
      rows={5}
    />
    <FieldArray
      name="externalResources"
      component={ExternalResources}
    />
  </form>
);

CreateResourceForm.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, { courseId, categoryId, router }) => ({
    onSubmit: (resourceInfo) => {
        dispatch(createResource(courseId, categoryId, resourceInfo));
        router.push(`/courses/${courseId}/categories/${categoryId}/resources/`);
    }
});

CreateResourceForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'createResource'
})(CreateResourceForm));

export default CreateResourceForm;
