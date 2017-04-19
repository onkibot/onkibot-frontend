import React from 'react';
import { RaisedButton, Card, CardActions, CardHeader } from 'material-ui';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

import UserCategoryList from '../../containers/UserCategoryList';

const Categories = props => (
  <div>
    <Card>
      <CardHeader
        title="Back"
        subtitle="to courses"
        avatar={<Link to="courses"><ArrowBackward /></Link>}
      />
      <div className="page-title-container page-title-container-index">
        <h1>Categories</h1>
      </div>
      <CardActions>
        <UserCategoryList courseId={props.params.courseId} />
        <Link to={`courses/${props.params.courseId}/categories/create`}>
          <RaisedButton
            label="Create category"
            fullWidth={true}
            className="place-mid"
            style={{
                margin: '20px auto',
                padding: '0px'
            }}
          />
        </Link>
        <Link to={`courses/${props.params.courseId}/users`}>
          <RaisedButton
            label="Administrate attending users"
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

Categories.propTypes = {
    params: React.PropTypes.array.isRequired
};

export default Categories;
