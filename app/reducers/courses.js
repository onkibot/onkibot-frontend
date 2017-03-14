const courses = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    description: action.description,
                    categories: []
                }
            ];
        default:
            return state;

        case 'ADD_CATEGORY':
            var newState = [...state]
            console.log(state);
            console.log(action.courseId);
            for (var i = 0; i < newState.length; i++){
                if (action.courseId == newState[i].id){
                    newState[i].categories.push({
                        id: action.id,
                        name: action.name,
                        description: action.description
                    })
                }
            }
            console.log(newState);
            return newState
    }
};

export default courses;
