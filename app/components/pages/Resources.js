import React from 'react';
import { RaisedButton, Card, CardActions, CardHeader } from 'material-ui';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

import UserResourceList from '../../containers/UserResourceList';

const Resources = props => (
  <div>
    <Card>
      <CardHeader
        title="Back"
        subtitle="to categories"
        avatar={<Link to={`courses/${props.params.courseId}/categories`}><ArrowBackward /></Link>}
      />
      <div className="page-title-container page-title-container-index">
        <h1>Resources</h1>
      </div>
      <CardActions>
        <UserResourceList courseId={props.params.courseId} categoryId={props.params.categoryId} />
        <Link to={`courses/${props.params.courseId}/categories/${props.params.categoryId}/resources/create`}>
          <RaisedButton
            label="Create resource"
            fullWidth={true}
            className="place-mid"
            style={{
                margin: '20px auto',
                padding: '0px'
            }}
          />
        </Link>
      </CardActions>
    </Card>
  </div>
);

export default Resources;
