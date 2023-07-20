import {
    TESTING
} from "../actions/actionsTypes";


export const inicalState = {
    testVariavel: false,
};

export const persistTesteReducer = (state = inicalState, action: any) => {
    switch (action.type) {
        case TESTING:
            return {
                ...state,
                testVariavel: action.testVariavel
            };
        default:
            return state;
    }
}
