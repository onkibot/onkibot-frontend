import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { MenuItem, RaisedButton } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';

import { addCourse } from '../actions';

const mapDispatchToProps = (dispatch, { router }) => {
    return {
        onSubmit: (courseInfo) => {
            dispatch(addCourse(courseInfo));
            router.push("/courses");
        }
    };
}

let CreateCourseForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="name" component={TextField} floatingLabelText="Course name" />
            </div>
            <div>
                <Field name="description" component={TextField} floatingLabelText="Course description" />
            </div>
            <div>
                <RaisedButton label="Create Course" type="submit" />
            </div>
        </form>
    );
};

CreateCourseForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'create_course'
})(CreateCourseForm));

export default CreateCourseForm;
