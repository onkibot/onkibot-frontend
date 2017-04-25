/* eslint no-class-assign: "off" */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import Rating from 'react-rating';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';
import ExternalResourceApprovalList from '../components/ExternalResourceApprovalList';

class FeedbackForm extends Component {

    updateDifficultyRating = (value) => {
        // Endrer verdien i reduxform-feedback skjemaet for difficulty
        // Dette er fordi Rating-componenten ikke er en 'input' så redux teller det ikke som et felt
        // Derfor er det et felt som er 'hidden' som verdien sin oppdateres når rating endres
        this.props.dispatch(change('feedback', 'difficulty', value)); // Dette er redux-form prop funksjoner/dispatches
    }

    handleApproval = (externalResourceId) => {
        // Sender med alle nødvendige ID'er for å registrere approval
        this.props.onApproval(externalResourceId, this.props.courseId, this.props.categoryId, this.props.resourceId);
    }

    render() {
        const { handleSubmit, handleCancel, difficulty, externalResources, onApproval } = this.props;
        const hiddenFieldsStyle = {
            display: 'none'
        };
        return (
          <form onSubmit={handleSubmit} className="form-style">
            <label className="feedback-label" htmlFor="Difficulty">Difficulty: </label>
            <Rating
              empty={<span className="icon-text">-</span>}
              initialRate={difficulty}
              full={[1, 2, 3, 4, 5].map(n => <span className="icon-text">{n}</span>)}
              onClick={rate => this.updateDifficultyRating(rate)}
            />
            <br />
            <Field
              component={TextField}
              name="difficulty"
              style={hiddenFieldsStyle}
              value={difficulty}
            />
            <label className="feedback-label" htmlFor="Difficulty">Approve links </label>
            <ExternalResourceApprovalList
              externalResources={externalResources}
              onApproval={this.handleApproval}
            />
            <br />
            <Field
              component={TextField}
              name="comment"
              fullWidth={true}
              floatingLabelText="Comment"
            />
            { /*
              Her må "Suggest External Resource" skjema legges inn for at en skal kunne foreslå extenral resources selv.
              */ }
            <RaisedButton
              label="Send"
              type="submit"
              className="float-right"
              style={{
                  marginTop: '20px',
                  marginLeft: '10px',
                  padding: '0px'
              }}
            />
            <RaisedButton
              label="Cancel"
              secondary={true}
              onTouchTap={handleCancel}
              className="float-right"
              style={{
                  marginTop: '20px',
                  padding: '0px'
              }}
            />
          </form>
        );
    }
}

FeedbackForm = reduxForm({
    form: 'feedback'
})(FeedbackForm);

const selector = formValueSelector('feedback');
FeedbackForm = connect(
  (state) => {
      // can select values individually
      const difficulty = selector(state, 'difficulty');
      // or together as a group
      // const { firstName, lastName } = selector(state, 'firstName', 'lastName')
      return {
          difficulty
          // fullName: `${firstName || ''} ${lastName || ''}`
      };
  }
)(FeedbackForm);

export default FeedbackForm;
