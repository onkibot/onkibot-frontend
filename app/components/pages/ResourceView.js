/* eslint max-len: ["error", 255] */
import React, { Component } from 'react';
import { Card, CardActions, CardHeader, Divider } from 'material-ui';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import Feedback from '../../containers/Feedback';
import ResourceContentView from '../../containers/ResourceContentView';

class ResourceView extends Component {

    constructor(props) {
        super(props);
        /* state for å håndtere dialog (åpne/lukke) */
        this.state = {
            dialogOpen: false
        };
    }

    handleOpen = () => {
        this.setState({
            dialogOpen: true
        });
    };

    handleClose = () => {
        this.setState({
            dialogOpen: false
        });
    };

    render() {
        const iconStyle = {
            fontSize: '48px'
        };

        return (
          <div>
            <Card>
              <CardHeader
                title="Back"
                subtitle="to categories"
                avatar={
                  <Link
                    to={`courses/${this.props.params.courseId}/categories/${this.props.params.categoryId}/resources/`}
                  >
                    <ArrowBackward />
                  </Link>
                }
              />
              <CardActions>
                <div className="card-actions-wrap">
                  { /* Laget et view for innholdet i resourcen, sender med alle ID'er */ }
                  <ResourceContentView
                    courseId={this.props.params.courseId}
                    categoryId={this.props.params.categoryId}
                    resourceId={this.props.params.resourceId}
                  />
                </div>
              </CardActions>
              <CardActions>
                <div className="card-actions-wrap">
                  <Divider />
                  <div className="task-navigation">

                    <Link to="/taskcontainer" className="float-left">
                      <ArrowBackward
                        style={iconStyle}
                        viewBox="0 0 20 20"
                      />
                      <span>Previous Task</span>
                    </Link>

                    <Link onClick={this.handleOpen} className="float-right">

                      <span>Next Task</span>
                      <ArrowForward
                        style={iconStyle}
                        viewBox="0 0 20 20"
                      />
                    </Link>

                    <div className="clearfix" />
                  </div>
                </div>
              </CardActions>
            </Card>
            { /* om dialogOpen = true, vis feedback-form og send med handleClose-funksjon slik at man kan lukke skjemaet om man trykker på cancel-knapp */ }
            {this.state.dialogOpen && <Feedback
              handleClose={this.handleClose}
              courseId={this.props.params.courseId}
              categoryId={this.props.params.categoryId}
              resourceId={this.props.params.resourceId}
            />}
          </div>
        );
    }

}

ResourceView.propTypes = {
    params: React.PropTypes.object.isRequired
};

export default ResourceView;
