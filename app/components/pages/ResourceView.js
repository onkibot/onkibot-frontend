import React from 'react';
import { RaisedButton, Card, CardActions, CardHeader, Divider, List } from 'material-ui';
import ResourceContentView from '../ResourceContentView';
import UserExternalResourceList from '../../containers/UserExternalResourceList';
import CodeCell from 'material-ui/svg-icons/action/code';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

let iconStyle = {
  fontSize: '48px'
}

const ResourceView = (props) => (
    <div>
      <Card>
        <CardHeader
          title="Back"
          subtitle="to categories"
          avatar={<Link to={`courses/${props.params.courseId}/categories/${props.params.categoryId}/resources/`}><ArrowBackward/></Link>}
        />
        <div className="page-title-container page-title-container-index">
          <h1>Resource</h1>
        </div>
        <CardActions>
          <div className="cardActions-wrap">
            <ResourceContentView courseId={props.params.courseId} categoryId={props.params.categoryId} resourceId={props.params.resourceId}/>
            <CardHeader title="Teacher's Notes"/>
            <Divider inset={true}/>
            <UserExternalResourceList courseId={props.params.courseId} categoryId={props.params.categoryId} resourceId={props.params.resourceId}/>
            <CardHeader title="Student's Notes"/>
            <Divider inset={true}/>
            <UserExternalResourceList courseId={props.params.courseId} categoryId={props.params.categoryId} resourceId={props.params.resourceId}/>
            <Divider/>
            <div className="task-navigation">

              <Link to="/taskcontainer" className="float-left">
                <ArrowBackward
                  style={iconStyle}
                  viewBox="0 0 20 20"/>
                <span>Previous Task</span>
              </Link>

              <Link to="/taskcontainer" className="float-right">

                <span>Next Task</span>
                <ArrowForward
                  style={iconStyle}
                  viewBox="0 0 20 20"/>
              </Link>

              <div className="clearfix"></div>
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
);

export default ResourceView;
