import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

import CreateCategoryForm from '../../forms/CreateCategoryForm';

/** The category creation page, used to create a category for a specific course */
const CreateCategory = props => (
  <div>
    <Card>
      <CardHeader
        title="Back"
        subtitle="to categories"
        avatar={<Link to={`courses/${props.params.courseId}/categories`}><ArrowBackward /></Link>}
      />
      <div className="page-title-container page-title-container-index">
        <h1>Create Category</h1>
      </div>
      <CardActions>
        <CreateCategoryForm courseId={props.params.courseId} router={props.router} />
      </CardActions>
    </Card>
  </div>
);

CreateCategory.propTypes = {
    /** Params from URL passed as props, contains courseId */
    params: React.PropTypes.object.isRequired,
    /** The react router passed as props, used to programmatically navigate to different pages */
    router: React.PropTypes.object.isRequired
};

export default CreateCategory;
