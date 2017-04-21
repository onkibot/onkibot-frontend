import React from 'react';
import { RaisedButton, Card, CardActions, CardHeader } from 'material-ui';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import UserCategoryList from '../../containers/UserCategoryList';

const mapStateToProps = state => ({
    canAdministrate: (state.auth.session !== null) && state.auth.session.isInstructor
});

let Categories = ({ params, canAdministrate }) => (
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
        <UserCategoryList courseId={params.courseId} />
        {canAdministrate && (
          <Link to={`courses/${params.courseId}/categories/create`}>
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
        )}
        {canAdministrate && (
          <Link to={`courses/${params.courseId}/users`}>
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
        )}
      </CardActions>
    </Card>
  </div>
);

Categories.propTypes = {
    params: React.PropTypes.object.isRequired,
    canAdministrate: React.PropTypes.bool.isRequired
};

Categories = connect(mapStateToProps)(Categories);

export default Categories;
