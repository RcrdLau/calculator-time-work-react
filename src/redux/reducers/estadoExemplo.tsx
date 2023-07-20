import {
    LOADING,
    SNACK_ERROR,
    SNACK_SUCESSO
} from "../actions/actionsTypes";

export const inicalState = {
    snackSucesso: false,
    snackError: false,
    snackMensagem: "",
    loading: false,

};

export const estadoExemplo = (state = inicalState, action: any) => {
    switch (action.type) {
        case SNACK_SUCESSO:
            return {
                ...state,
                snackSucesso: action.snackSucesso,
                snackMensagem: action.snackMensagem
            };
        case SNACK_ERROR:
            return {
                ...state,
                snackError: action.snackError,
                snackMensagem: action.snackMensagem
            };
        case LOADING:
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state;
    }
}