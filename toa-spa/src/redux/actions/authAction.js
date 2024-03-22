import { postDataAPI } from "../../utils/fetchData"

export const TYPES = {
    AUTH : 'AUTH'
}

export const login = (data) => async (dispatch) => {
    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    let res;
    try {
        res = await postDataAPI('login', data);
        
        if (res.status === 200) { 
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
        } else { 
            dispatch({
                type: 'NOTIFY',
                payload: {
                    error: res.data.msg
                }
            });
            return Promise.reject(res.data.msg)
        }
        
    } catch (error) { 
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
    if (res.status === 200) { 
      
      dispatch({
        type: "AUTH",
        payload: {
          token: null,
          user: null,
        }
      });
      
      
      localStorage.removeItem('firstLogin');

     
      dispatch({
        type: "NOTIFY",
        payload: {
          success: res.data.msg
        }
      });
    } else { 
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


export const register = (data) => async (dispatch) => {
  dispatch({ type: 'NOTIFY', payload: { loading: true } });

  let res;
  try {
      res = await postDataAPI('register', data);
      
      if (res.status >= 200 && res.status < 300) {
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

          return Promise.resolve(res);
      } else {
          dispatch({
              type: 'NOTIFY',
              payload: {
                  error: res.data.msg
              }
          });

          return Promise.reject(res.data.msg);
      }
  } catch (error) { 
      dispatch({
          type: 'NOTIFY',
          payload: {
              error: 'An unexpected error occurred. Please try again.'
          }
      });

      return Promise.reject(error.message);
  }
}