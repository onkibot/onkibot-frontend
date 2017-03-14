import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';

import CreateCategoryForm from '../../forms/CreateCategoryForm';

const CreateCategory = (props) => (
    <Card>
        <CardHeader title="Onkibot" subtitle="Category creation form" />
        <CardActions>
            <CreateCategoryForm courseId={props.params.courseId} router={props.router} />
        </CardActions>
    </Card>
);

export default CreateCategory;
