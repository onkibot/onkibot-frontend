import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';

import CreateCourseForm from '../../forms/CreateCourseForm';

const Signup = () => (
    <Card>
        <CardHeader title="Onkibot" subtitle="The course creation form" />
        <CardActions>
            <CreateCourseForm />
        </CardActions>
    </Card>
);

export default Signup;