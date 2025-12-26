import { TYPES } from "../actions/authAction";

const initialState = {
    token: null,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.AUTH:
            return action.payload
        default:
            return state
    }
}

export default authReducer
