/* eslint max-len: ["error", 255] */

/* Action for å sende feedback */
export const sendFeedback = (feedback) => {
    console.log(feedback);
};

/* Action for å sende approval */

export const externalResourceApproval = (externalResourceId, courseId, categoryId, resourceId) => {
    const config = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    };
    return fetch(`/api/v1/courses/${courseId}/categories/${categoryId}/resources/${resourceId}/externals/${externalResourceId}/approve`, config)
    .then(response => response.json())
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
};
