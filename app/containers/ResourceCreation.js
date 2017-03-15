import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui';

import CreateResourceForm from '../forms/CreateResourceForm'
import AddExternalResourceForm from '../forms/AddExternalResourceForm';
import ExternalResourceList from '../components/ExternalResourceList';
import {createAddedExternalResource, deleteAddedExternalResource, clearAddedExternalResources} from '../actions/'

let ResourceCreation = ({onSubmit, externalResources, onAddExternalResource, onDeleteExternalResource}) => {
    const cardStyle = {
        padding: '30px',
        marginBottom: '20px'
    };

    return (
        <div className="form-style">
            <Card style={cardStyle}>
                <h3>Resource information</h3>
                <CreateResourceForm onSubmit={onSubmit}/>

                <ExternalResourceList
                    externalResources={externalResources}
                    onRemove={onDeleteExternalResource}/>
            </Card>

            <Card style={cardStyle}>
                <h3>External Resources</h3>
                <AddExternalResourceForm onSubmit={onAddExternalResource}/>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        externalResources: state.addedExternalResources
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddExternalResource: (externalResource) => dispatch(createAddedExternalResource(externalResource)),
        onDeleteExternalResource: (url) => dispatch(deleteAddedExternalResource(url)),
        onSubmit: () => {
            //TODO
            dispatch(clearAddedExternalResources());
        }
    };
}

ResourceCreation = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourceCreation);

export default ResourceCreation;
