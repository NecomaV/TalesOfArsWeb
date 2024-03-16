import { TYPES } from "../actions/authAction";

const initalState = {}

const authReducer = (state = {initalState}, action) => {
    switch(action.type){
        case TYPES.AUTH:
            return action.payload
        default:
            return state
    }
}

export default authReducer