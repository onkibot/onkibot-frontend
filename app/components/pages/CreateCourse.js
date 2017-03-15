import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';

import CreateCourseForm from '../../forms/CreateCourseForm';

const Signup = (props) => (
    <Card>
        <CardHeader title="Onkibot" subtitle="The course creation form" />
        <CardActions>
            <CreateCourseForm router={props.router} />
        </CardActions>
    </Card>
);

export default Signup;
