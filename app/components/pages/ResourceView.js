/* eslint max-len: ["error", 255] */
import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui';
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
        const courseId = parseInt(this.props.params.courseId, 10);
        const categoryId = parseInt(this.props.params.categoryId, 10);
        const resourceId = parseInt(this.props.params.resourceId, 10);
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
              <ResourceContentView
                provideFeedback={this.handleOpen}
                courseId={courseId}
                categoryId={categoryId}
                resourceId={resourceId}
              />
            </Card>
            { /* om dialogOpen = true, vis feedback-form og send med handleClose-funksjon slik at man kan lukke skjemaet om man trykker på cancel-knapp */ }
            {this.state.dialogOpen && <Feedback
              handleClose={this.handleClose}
              courseId={courseId}
              categoryId={categoryId}
              resourceId={resourceId}
            />}
          </div>
        );
    }
}

ResourceView.propTypes = {
    params: React.PropTypes.object.isRequired
};

export default ResourceView;
