import { postDataAPI } from "../../utils/fetchData"


export const TYPES = {
    AUTH : 'AUTH'
}

export const login = (data) => async (dispatch) => {
    try {
        dispatch({type: 'NOTIFY', payload: data})
        const res = await postDataAPI('login', data)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}