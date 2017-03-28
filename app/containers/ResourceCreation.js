import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui';

import CreateResourceForm from '../forms/CreateResourceForm';
import AddExternalResourceForm from '../forms/AddExternalResourceForm';
import ExternalResourceList from '../components/ExternalResourceList';
import {
  addResource, createAddedExternalResource,
  deleteAddedExternalResource, clearAddedExternalResources
} from '../actions/';

let ResourceCreation = ({ onSubmit, externalResources, onAddExternalResource, onDeleteExternalResource }) => {
    const cardStyle = {
        padding: '30px',
        marginBottom: '20px'
    };

    return (
      <div className="form-style">
        <Card style={cardStyle}>
          <h3>Resource information</h3>
          <CreateResourceForm
            onSubmit={onSubmit}
          />

          <ExternalResourceList
            externalResources={externalResources}
            onRemove={onDeleteExternalResource}
          />
        </Card>
        <Card style={cardStyle}>
          <h3>External Resources</h3>
          <AddExternalResourceForm
            onSubmit={onAddExternalResource}
          />
        </Card>
      </div>
    );
};

const mapStateToProps = state => ({
    externalResources: state.addedExternalResources
});

function handleOnSubmitAction(resourceInfo, courseId, categoryId) {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(addResource(resourceInfo, state.addedExternalResources, courseId, categoryId));
    };
}

const mapDispatchToProps = (dispatch, { courseId, categoryId, router }) => ({
    onAddExternalResource: externalResource => dispatch(createAddedExternalResource(
      externalResource,
      courseId,
      categoryId
    )),
    onDeleteExternalResource: url => dispatch(deleteAddedExternalResource(url)),
    onSubmit: (resourceInfo) => {
        // TODO
        // dispatch(addResource(resourceInfo, props.addedExternalResources, courseId, categoryId));
        dispatch(handleOnSubmitAction(resourceInfo, courseId, categoryId));
        dispatch(clearAddedExternalResources());
        router.push(`/courses/${courseId}/categories/${categoryId}/resources/`);
    }
});

ResourceCreation = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourceCreation);

export default ResourceCreation;
