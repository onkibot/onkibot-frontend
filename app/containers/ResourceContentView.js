import React from 'react';
import { connect } from 'react-redux';
import { CardHeader, CardActions, CardText, Divider } from 'material-ui';
import { Link } from 'react-router';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/styles';
import ExternalResourceList from '../components/ExternalResourceList';

let ResourceContentView = ({ provideFeedback, title, body, comment, externalResources, previousResourceId,
  nextResourceId, courseId, categoryId }) => (
    <div className="resource-content-view">
      <div className="page-title-container page-title-container-index">
        <h1>{title}</h1>
      </div>
      {body && (
        <div className="task-view">
          <SyntaxHighlighter
            language="javascript"
            style={monoBlue}
            className="text-align-left"
          >
            {body}
          </SyntaxHighlighter>
        </div>
      )}
      {comment && (
        <div>
          <CardHeader title="Instructor's comment" />
          <Divider inset={true} />
          <CardText>{comment}</CardText>
        </div>
      )}
      {externalResources.length > 0 && (
        <div className="external-resource-wrap">
          <h3>External resources</h3>
          <p>These links are suggested by instructors and students</p>
          <Divider inset={true} />
          <ExternalResourceList
            externalResources={externalResources}
          />
        </div>
      )}
      <CardActions>
        <div className="card-actions-wrap">
          <Divider />
          <div className="task-navigation">
            {previousResourceId !== null && (
              <Link
                to={`courses/${courseId}/categories/${categoryId}/resources/${previousResourceId}/resourceView/`}
              >
                <ArrowBackward
                  style={{ fontSize: '48px' }}
                  viewBox="0 0 20 20"
                />
                <span>Previous Task</span>
              </Link>
            )}
            <Link className="feedback-btn" onClick={provideFeedback}>
              Provide feedback
            </Link>
            {nextResourceId !== null && (
              <Link
                to={`courses/${courseId}/categories/${categoryId}/resources/${nextResourceId}/resourceView/`}
              >
                <span>Next Task</span>
                <ArrowForward
                  style={{ fontSize: '48px' }}
                  viewBox="0 0 20 20"
                />
              </Link>
            )}
            <div className="clearfix" />
          </div>
        </div>
      </CardActions>
    </div>
);

ResourceContentView.propTypes = {
    provideFeedback: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    comment: React.PropTypes.string,
    externalResources: React.PropTypes.array.isRequired,
    previousResourceId: React.PropTypes.number,
    nextResourceId: React.PropTypes.number,
    courseId: React.PropTypes.number.isRequired,
    categoryId: React.PropTypes.number.isRequired
};

const mapStateToProps = (state, { categoryId, resourceId }) => {
    const resources = state.resources.filter(it => it.categoryId == categoryId);
    const resource = resources.find(it => it.resourceId == resourceId);
    const resourceIndex = state.resources.indexOf(resource);
    let previousResourceId = null;
    let nextResourceId = null;
    if (resourceIndex !== -1) {
        if (resourceIndex - 1 >= 0) {
            previousResourceId = resources[resourceIndex - 1].resourceId;
        }
        if (resourceIndex + 1 < resources.length) {
            nextResourceId = resources[resourceIndex + 1].resourceId;
        }
    }

    const externalResources = state.externalResources.filter(it => it.resourceId == resourceId);
    return {
        body: resource.body,
        title: resource.name,
        externalResources,
        previousResourceId,
        nextResourceId
    };
};

ResourceContentView = connect(
  mapStateToProps
)(ResourceContentView);

export default ResourceContentView;
