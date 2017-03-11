import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton, MenuItem, CardHeader, ListItem } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';
import Close from 'material-ui/svg-icons/navigation/close';

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

    let createContentElement = function() {
      let selectedContent = this.state.selectedContent;
    }

    let resources = this.state.addedResources;
    let resourceElements = this.createResourceElements(resources);

    const { handleSubmit, onSubmit } = this.props;

    return (

      <form onSubmit={handleSubmit} className="form-style">
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
        <TextField
          floatingLabelText="Comment to task"
          multiLine={true}
          fullWidth={true}
          rows={1}/>

        <h3>Resources</h3>
        <p>To remove an added resource, click the resource.</p>
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
