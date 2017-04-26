import React from 'react';
import { connect } from 'react-redux';
import { CardHeader, CardActions, CardText, Divider, RaisedButton } from 'material-ui';
import { Link } from 'react-router';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/styles';

import SuggestExternalResourceForm from '../forms/SuggestExternalResourceForm';
import UserFeedbackList from '../components/UserFeedbackList';
import ExternalResourceList from '../components/ExternalResourceList';

let ResourceContentView = ({ provideFeedback, title, body, comment, externalResources, feedback,
  averageFeedbackDifficulty, previousResourceId, nextResourceId, courseId, categoryId, resourceId }) => (
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
          <Divider />
          <CardText>{comment}</CardText>
        </div>
      )}
      <div className="external-resource-wrap">
        <CardHeader
          title="External resources"
          subtitle="Links suggested by instructors and students"
        />
        <Divider />
        <ExternalResourceList
          externalResources={externalResources}
        />
        <SuggestExternalResourceForm
          courseId={courseId}
          categoryId={categoryId}
          resourceId={resourceId}
        />
      </div>
      {feedback.length > 0 && (
        <div>
          <CardHeader
            title="User feedback"
            subtitle={`Average difficulty rating: ${averageFeedbackDifficulty}`}
          />
          <Divider />
          <UserFeedbackList
            feedback={feedback}
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
              <RaisedButton
                label="Provide feedback"
              />
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
    feedback: React.PropTypes.array.isRequired,
    averageFeedbackDifficulty: React.PropTypes.number.isRequired,
    externalResources: React.PropTypes.array.isRequired,
    previousResourceId: React.PropTypes.number,
    nextResourceId: React.PropTypes.number,
    courseId: React.PropTypes.number.isRequired,
    categoryId: React.PropTypes.number.isRequired,
    resourceId: React.PropTypes.number.isRequired
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

    const externalResources = state.externalResources
    .filter(it => it.resourceId == resourceId)
    .sort((a, b) => b.approvalCount - a.approvalCount);

    return {
        body: resource.body,
        title: resource.name,
        comment: resource.comment,
        feedback: resource.feedback,
        averageFeedbackDifficulty: resource.averageFeedbackDifficulty,
        externalResources,
        previousResourceId,
        nextResourceId
    };
};

ResourceContentView = connect(
  mapStateToProps
)(ResourceContentView);

export default ResourceContentView;
