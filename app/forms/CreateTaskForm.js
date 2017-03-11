import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton, MenuItem, Card, CardHeader, ListItem } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';
import Close from 'material-ui/svg-icons/navigation/close';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/dist/styles';

class CreateTaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses : {
        tdt4100 : {
          categories : ['Object and classes', 'Interface and behaviour', 'Object structure', 'GUI']
        },
        javascript : {
          categories : ['Objects', 'Variables', 'Functions', 'Callbacks']
        }
      },

      selectedCourse : '',
      currentCategories : [],
      selectedContent : '',
      taskText : '',
      taskCode : ``,

      addedResources : [],
      activeResourcefields : {
        resourceTitle : '',
        resourceComment : '',
        resourceUrl : '',
        errorMsg : ''
      }
    }
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTaskTextChange = this.handleTaskTextChange.bind(this);
    this.createContentElement = this.createContentElement.bind(this);
    this.handleTaskCodeChange = this.handleTaskCodeChange.bind(this);
    this.handleAddNewResourceFieldChange = this.handleAddNewResourceFieldChange.bind(this);
    this.handleAddNewResource = this.handleAddNewResource.bind(this);
    this.handleRemoveAddedResource = this.handleRemoveAddedResource.bind(this);
  }

  handleCourseChange(event, index, obj) {
    let courses = this.state.courses;
    let activeCategories = courses[index].categories;
    this.setState({
      selectedCourse: index,
      currentCategories : activeCategories
    });
  }

  handleContentChange(event, index, obj) {
    this.setState({
      selectedContent : index
    });
  }

  handleTaskTextChange(e) {
    this.setState({
      taskText : e.target.value
    });
  }

  handleTaskCodeChange(e) {
    this.setState({
      taskCode : `${e.target.value}`
    });
  }

  createContentElement() {
    let selectedContent = this.state.selectedContent;
    if (selectedContent == 'text') {
      return(
        <TextField
          floatingLabelText="Question / Task"
          multiLine={true}
          fullWidth={true}
          onChange={this.handleTaskTextChange}
          rows={1}/>
      );
    }else if (selectedContent == 'code') {
      return(
        <div>
          <p className="italic">For indentation, add four spaces.</p>
          <TextField
            floatingLabelText="Code"
            multiLine={true}
            fullWidth={true}
            onChange={this.handleTaskCodeChange}
            rows={3}/>
          <p className="italic">This is how your code will be shown.</p>
          <SyntaxHighlighter language='javascript' style={zenburn} showLineNumbers="true" className="text-align-left">{this.state.taskCode}</SyntaxHighlighter>
        </div>
      );
    } else if (selectedContent == 'image') {
      return(
        <RaisedButton
           containerElement='label'
           label='Upload Image'>
           <input type="file" />
        </RaisedButton>
      );
    }
  }

  handleAddNewResourceFieldChange(e) {
    let activeState = this.state.activeResourcefields;
    let field = e.target.name;
    activeState[field] = e.target.value;
    this.setState({
      activeResourcefields : activeState
    });
  }

  handleAddNewResource() {
    let title = this.state.activeResourcefields.resourceTitle;
    let comment = this.state.activeResourcefields.resourceComment;
    let url = this.state.activeResourcefields.resourceUrl;

    let activeResourcefieldsObj = this.state.activeResourcefields;

    if(title == '' || comment == '' || url == ''){
      activeResourcefieldsObj.errorMsg = 'Please fill out all the fields.'
      this.setState({
        activeResourcefields : activeResourcefieldsObj
      });
      return;
    }else {
      let stateObj = this.state;
      stateObj.addedResources.push({
        title : title,
        comment : comment,
        url : url
      });
      stateObj.activeResourcefields.errorMsg = '';
      this.setState(stateObj);
    }
  }

  handleRemoveAddedResource(url) {
    const remainder = this.state.addedResources.filter((resource) => {
      if(resource.url !== url) return resource;
    });
    this.setState({
      addedResources : remainder
    });
  }

  createResourceElements(list) {
    let listElements = list.map((element) => {
      return (
        <a
          key={element.url}
          onClick={() => this.handleRemoveAddedResource(element.url)}>
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

    let createMenuItems = function(item, key = item) {
      return <MenuItem key={key} value={item} primaryText={item}/>
    };

    let resources = this.state.addedResources;
    let resourceElements = this.createResourceElements(resources);
    let contentElement = this.createContentElement();

    const { handleSubmit, onSubmit } = this.props;

    const cardStyle = {
      padding: '30px',
      marginBottom: '20px'
    };

    return (

      <form onSubmit={handleSubmit} className="form-style create-task">
        <Card style={cardStyle}>
          <h3>Where</h3>
          <Field
            component={SelectField}
            name="course"
            fullWidth={true}
            floatingLabelText="Course"
            onChange={this.handleCourseChange}>
              {Object.keys(this.state.courses).map(createMenuItems)}
          </Field>
          <Field
            component={SelectField}
            name="category"
            fullWidth={true}
            floatingLabelText="Category">
              {this.state.currentCategories.map(createMenuItems)}
          </Field>
        </Card>

        <Card style={cardStyle}>
          <h3>Task information</h3>

          <Field
            component={TextField}
            name="taskTitle"
            fullWidth={true}
            floatingLabelText="Title"/>
          <Field
            component={SelectField}
            name="content"
            fullWidth={true}
            floatingLabelText="Content"
            onChange={this.handleContentChange}>
              <MenuItem value="image" primaryText="Image" />
              <MenuItem value="code" primaryText="Code" />
              <MenuItem value="text" primaryText="Text" />
          </Field>
          {contentElement}
          <TextField
            floatingLabelText="Comment to task"
            multiLine={true}
            fullWidth={true}
            rows={1}/>
        </Card>

        <Card style={cardStyle}>
          <h3>Resources</h3>
          <p className="italic">To remove an added resource, click the resource.</p>
          <Field
            component={TextField}
            name="resourceTitle"
            fullWidth={true}
            floatingLabelText="Resource title"
            value={this.state.activeResourcefields.resourceTitle}
            onChange={this.handleAddNewResourceFieldChange}/>
          <Field
            component={TextField}
            name="resourceComment"
            fullWidth={true}
            floatingLabelText="Resource comment"
            value={this.state.activeResourcefields.resourceComment}
            onChange={this.handleAddNewResourceFieldChange}/>
          <Field
            component={TextField}
            name="resourceUrl"
            fullWidth={true}
            floatingLabelText="Resource URL"
            value={this.state.activeResourcefields.resourceUrl}
            onChange={this.handleAddNewResourceFieldChange}/>

          {resourceElements}

          <RaisedButton
            label="Add Resource"
            className="float-right"
            style = {{
              marginTop: '20px',
              width: '150px',
              margin: '20px auto',
              padding: '0px'
            }}
            onClick={this.handleAddNewResource}/>
          <p className="error-msg">{this.state.activeResourcefields.errorMsg}</p>
          <div className="clearfix"></div>
        </Card>

          <div>
              <RaisedButton
                label="Add Task"
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

  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (credentials) => {
            console.log(credentials);
        }
    };
}

CreateTaskForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'createTask'
})(CreateTaskForm));

export default CreateTaskForm;
