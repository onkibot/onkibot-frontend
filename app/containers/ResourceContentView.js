import React from 'react';
import { connect } from 'react-redux';
import { CardHeader, Divider } from 'material-ui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/dist/styles';
import ExternalResourceList from '../components/ExternalResourceList';

let ResourceContentView = ({ title, body, externalResources }) => (
  <div className="resource-content-view">
    <div className="page-title-container page-title-container-index">
      <h1>{title}</h1>
    </div>
    <div className="taskView">
      <SyntaxHighlighter
        language="javascript"
        style={zenburn}
        showLineNumbers="true"
        className="text-align-left"
      >
        {body}
      </SyntaxHighlighter>
    </div>
    <CardHeader title="Teacher's Notes" />
    <Divider inset={true} />
    <ExternalResourceList
      externalResources={externalResources}
    />
    <CardHeader title="Student's Notes" />
    <Divider inset={true} />
    <ExternalResourceList
      externalResources={externalResources}
    />
  </div>
);

const mapStateToProps = (state, ownProps) => {
    const stateCourse = state.courses.find(course => course.courseId == ownProps.courseId);
    const stateCategory = stateCourse.categories.find(category => category.categoryId == ownProps.categoryId);
    const stateResource = stateCategory.resources.find(resource => resource.resourceId == ownProps.resourceId);
    return {
        comment: stateResource.comment,
        body: stateResource.body,
        title: stateResource.name,
        externalResources: stateResource.externalResources
    };
};

ResourceContentView = connect(
  mapStateToProps,
  null
)(ResourceContentView);

export default ResourceContentView;
