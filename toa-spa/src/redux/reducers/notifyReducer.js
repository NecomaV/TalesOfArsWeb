import { TYPES } from "../actions/notifyAction";

const initialState = {
    loading: false,
    error: null,
    success: null
}

const notifyReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.NOTIFY:
            return action.payload
        default:
            return state
    }
}

export default notifyReducer
