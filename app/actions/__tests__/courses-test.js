import { fetchSuccess } from '../courses';

describe('courses test', () => {
    it('should dispatch cascading actions', () => {
        const dispatch = jest.fn();
        fetchSuccess(dispatch, [{
            courseId: 0,
            categories: [{
                categoryId: 0,
                resources: [{
                    resourceId: 0,
                    externalResources: [{
                        externalResourceId: 0
                    }],
                    myFeedback: {
                        resourceFeedbackId: 0
                    },
                    feedback: [{
                        resourceFeedbackId: 1
                    }]
                }]
            }],
            attendees: [{
                userId: 0
            }]
        }]);

        expect(dispatch).toHaveBeenCalledTimes(7);
    });
});
