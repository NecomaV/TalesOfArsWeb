import { postDataAPI } from "../../utils/fetchData"

export const TYPES = {
    AUTH : 'AUTH'
}

export const login = (data) => async (dispatch) => {
    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    let res;
    try {
        res = await postDataAPI('login', data);
        
        if (res.status === 200) { // Success
            await dispatch({
                type: "AUTH",
                payload: {
                    token: res.data.access_token,
                    user: res.data.user
                }
            });
            localStorage.setItem('firstLogin', true);
    
            await dispatch({
                type: "NOTIFY",
                payload: {
                    success: res.data.msg
                }
            });
    
            console.log(res);
            return Promise.resolve(res);
        } else { // Failure
            dispatch({
                type: 'NOTIFY',
                payload: {
                    error: res.data.msg
                }
            });
            return Promise.reject(res.data.msg)
        }
        
    } catch (error) { // Network or server error
        console.error('Error during login:', error);
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: 'An unexpected error occurred. Please try again.'
            }
        });
        return Promise.reject(error.message)
    }

}


export const logout = () => async (dispatch) => {
  try {
    const res = await postDataAPI('logout');
    if (res.status === 200) { // Success
      // Reset auth state
      dispatch({
        type: "AUTH",
        payload: {
          token: null,
          user: null,
        }
      });
      
      // Optionally, you can clear 'firstLogin' from local storage:
      localStorage.removeItem('firstLogin');

      // Notify user of successful logout
      dispatch({
        type: "NOTIFY",
        payload: {
          success: res.data.msg
        }
      });
    } else { // Failure
      dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.data.msg
        }
      });
    }
  } catch (error) { 
    console.error('Error during logout:', error);
    dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'An unexpected error occurred. Please try again.'
      }
    });
  }
}