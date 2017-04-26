import React from 'react';
import { RaisedButton, Card, CardActions, CardHeader } from 'material-ui';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import UserResourceList from '../../containers/UserResourceList';

const mapStateToProps = state => ({
    canAdministrate: (state.auth.session !== null) && state.auth.session.isInstructor
});

/** The resource list page, used to navigate resources in a specific category in a specific course */
let Resources = ({ params, canAdministrate }) => (
  <div>
    <Card>
      <CardHeader
        title="Back"
        subtitle="to categories"
        avatar={<Link to={`courses/${params.courseId}/categories`}><ArrowBackward /></Link>}
      />
      <div className="page-title-container page-title-container-index">
        <h1>Resources</h1>
      </div>
      <CardActions>
        <UserResourceList courseId={params.courseId} categoryId={params.categoryId} />
        {canAdministrate && (
          <Link to={`courses/${params.courseId}/categories/${params.categoryId}/resources/create`}>
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
        )}
      </CardActions>
    </Card>
  </div>
);

Resources.propTypes = {
    /** Params from URL passed as props, contains courseId and categoryId */
    params: React.PropTypes.object.isRequired,
    /** Bool set true if the user is logged in as an instructor */
    canAdministrate: React.PropTypes.bool.isRequired
};

Resources = connect(mapStateToProps)(Resources);

export default Resources;
