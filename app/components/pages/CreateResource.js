import React from 'react';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Card, CardHeader, CardText } from 'material-ui';
import { Link } from 'react-router';

import CreateResourceForm from '../../forms/CreateResourceForm';

/** The resource creation page, used to create a new resource in a specific category in a specific course */
const CreateResource = props => (
  <div>
    <Card>
      <CardHeader
        title="Back"
        subtitle="to resources"
        avatar={
          <Link
            to={`courses/${props.params.courseId}/categories/${props.params.categoryId}/resources`}
          >
            <ArrowBackward />
          </Link>
        }
      />
      <div className="page-title-container page-title-container-index">
        <h1>Create Resource</h1>
      </div>
      <div className="callout">
        <h4>Need help create a resource?</h4>
        <p>
          To create a resource, add a title, a body, a
           comment to the resource and external resources. To add external resources, just click
          ' ATTACH EXTERNAL RESOURCE' and a resource card will show up for you to fill in. If you want to
          add another one, just click the button one more time!
        </p>
      </div>
      <CreateResourceForm
        courseId={props.params.courseId}
        categoryId={props.params.categoryId}
        router={props.router}
      />
    </Card>
  </div>
);

CreateResource.propTypes = {
    /** Params from URL passed as props, contains courseId and categoryId */
    params: React.PropTypes.object.isRequired,
    /** The react router passed as props, used to programmatically navigate to different pages */
    router: React.PropTypes.object.isRequired
};

export default CreateResource;
