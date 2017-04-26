/* eslint no-class-assign: "off" */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import Rating from 'react-rating';
import { RaisedButton } from 'material-ui';
import { TextField } from 'redux-form-material-ui';
import FullStar from 'material-ui/svg-icons/toggle/star';
import EmptyStar from 'material-ui/svg-icons/toggle/star-border';
import ExternalResourceApprovalList from '../components/ExternalResourceApprovalList';

const validate = ({ difficulty, comment }) => {
    const errors = {};
    if (!difficulty) {
        errors.difficulty = 'Required';
    }
    if (!comment) {
        errors.comment = 'Required';
    }
    return errors;
};

class FeedbackForm extends Component {

    updateDifficultyRating = (value) => {
        // Endrer verdien i reduxform-feedback skjemaet for difficulty
        // Dette er fordi Rating-componenten ikke er en 'input' så redux teller det ikke som et felt
        // Derfor er det et felt som er 'hidden' som verdien sin oppdateres når rating endres
        this.props.dispatch(change('feedback', 'difficulty', value)); // Dette er redux-form prop funksjoner/dispatches
    }

    render() {
        const { handleSubmit, handleCancel, difficulty, externalResources, onApproval } = this.props;

        const hiddenFieldsStyle = {
            display: 'none'
        };
        return (
          <form onSubmit={handleSubmit} className="form-style feedback-form">
            <label className="feedback-label" htmlFor="Difficulty">Difficulty: </label>
            <Rating
              initialRate={difficulty}
              empty={<EmptyStar />}
              full={<FullStar />}
              onClick={rate => this.updateDifficultyRating(rate)}
            />
            <br />
            <br />
            <Field
              component={TextField}
              name="difficulty"
              style={hiddenFieldsStyle}
              value={difficulty}
            />
            <label className="feedback-label" htmlFor="Difficulty">
              Please select the external resources you found useful
            </label>
            <ExternalResourceApprovalList
              externalResources={externalResources}
              onApproval={onApproval}
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

FeedbackForm.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    handleCancel: React.PropTypes.func.isRequired,
    difficulty: React.PropTypes.number,
    externalResources: React.PropTypes.array.isRequired,
    onApproval: React.PropTypes.func.isRequired
};

FeedbackForm = reduxForm({
    form: 'feedback',
    validate
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
