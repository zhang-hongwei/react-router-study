import { ADD_NUM } from '../actions/actions';

function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_NUM:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        default:
            return state;
    }
}
