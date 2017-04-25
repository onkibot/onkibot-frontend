import React from 'react';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Card, CardHeader } from 'material-ui';
import { Link } from 'react-router';

import CreateResourceForm from '../../forms/CreateResourceForm';

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
      <CreateResourceForm
        courseId={props.params.courseId}
        categoryId={props.params.categoryId}
        router={props.router}
      />
    </Card>
  </div>
);

CreateResource.propTypes = {
    params: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
};

export default CreateResource;
