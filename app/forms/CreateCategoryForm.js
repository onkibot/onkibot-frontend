import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { MenuItem, RaisedButton } from 'material-ui';
import { TextField, SelectField } from 'redux-form-material-ui';

import { addCategory } from '../actions';

const mapDispatchToProps = (dispatch, { courseId, router }) => {
    return {
        onSubmit: (categoryInfo) => {
            categoryInfo.courseId = courseId;
            dispatch(addCategory(categoryInfo));
            router.push("/courses/"+courseId+"/categories");
        }
    };
}

let CreateCategoryForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="name" component={TextField} floatingLabelText="Category name" />
            </div>
            <div>
                <Field name="description" component={TextField} floatingLabelText="Category description" />
            </div>
            <div>
                <RaisedButton label="Create Category" type="submit" />
            </div>
        </form>
    );
};

CreateCategoryForm = connect(
    undefined,
    mapDispatchToProps
)(reduxForm({
    form: 'create_category'
})(CreateCategoryForm));

export default CreateCategoryForm;
