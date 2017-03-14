import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton, MenuItem, Card, CardHeader, ListItem } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';
import Close from 'material-ui/svg-icons/navigation/close';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/dist/styles';

import CreateResourceForm from '../forms/CreateResourceForm'
import AddExternalResourceForm from '../forms/AddExternalResourceForm';

class ResourceCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addedExternalResources: []
        }
        this.handleAddNewExternalResource = this.handleAddNewExternalResource.bind(this);
        this.handleRemoveAddedExternalResource = this.handleRemoveAddedExternalResource.bind(this);
    }

    handleAddNewExternalResource(externalResource) {
        let stateObj = this.state;
        stateObj.addedExternalResources = [...stateObj.addedExternalResources, externalResource]
        this.setState(stateObj);
    }

    handleRemoveAddedExternalResource(url) {
        const remainder = this.state.addedExternalResources.filter((externalResource) => {
            if(externalResource.url !== url) return externalResource;
        });
        this.setState({
            addedExternalResources : remainder
        });
    }

    createExternalResourceElements(list) {
        let listElements = list.map((element) => {
            return (
                <a
                    key={element.url}
                    onClick={() => this.handleRemoveAddedExternalResource(element.url)}>
                    <ListItem
                        leftIcon={<CodeCell/>}
                        rightIcon={<Close/>}
                        primaryText={element.comment}
                        secondaryText={element.title}
                    />
                </a>
            );
        });
        return listElements;
    }

    render() {

        let externalResources = this.state.addedExternalResources;
        let externalResourceElements = this.createExternalResourceElements(externalResources);

        const { handleSubmit, onSubmit } = this.props;

        const cardStyle = {
            padding: '30px',
            marginBottom: '20px'
        };

        return (
            <div>
                <Card style={cardStyle}>
                    <h3>Resource information</h3>
                    <CreateResourceForm/>
                    <p className="italic">To remove an added external resource, click the external resource.</p>
                    {externalResourceElements}
                </Card>

                <Card style={cardStyle}>
                    <h3>External Resources</h3>
                    <AddExternalResourceForm onSubmit={this.handleAddNewExternalResource}/>
                </Card>
            </div>
        );

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (resourceProps) => {
            console.log(resourceProps);
        }
    };
}

ResourceCreation = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'createResource'
})(ResourceCreation));

export default ResourceCreation;
