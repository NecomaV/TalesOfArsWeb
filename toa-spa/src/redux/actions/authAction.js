import { postDataAPI } from "../../utils/fetchData"
import axios from 'axios'

export const TYPES = {
    AUTH : 'AUTH'
}



export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/login`, data);

    dispatch({
      type: "AUTH",
      payload: {
        token: res.data.access_token,
        user: res.data.user, // assuming the server sends back the user info
      },
    });

    localStorage.setItem('firstLogin', true);
    localStorage.setItem('user', JSON.stringify(res.data.user)); // store user info
  } catch (err) {
    dispatch({
      type: "NOTIFY",
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};


export const logout = () => async (dispatch) => {
  const res = await postDataAPI('logout');
  console.log('logout response: ', res); 

  dispatch({
    type: "AUTH",
    payload: {
      token: null,
      user: null,
    },
  });
 
  localStorage.removeItem('firstLogin');

  dispatch({
    type: "NOTIFY",
    payload: {
      success: res.data.msg
    },
  });
};


export const register = (data) => async (dispatch) => {
  dispatch({ type: 'NOTIFY', payload: { loading: true } });

  try {
    const res = await postDataAPI('register', data);
      
    if (res.status >= 200 && res.status < 300) {
      dispatch({
        type: "AUTH",
        payload: {
          token: res.data.access_token,
          user: res.data.user
        }
      });

      localStorage.setItem('firstLogin', true);
      localStorage.setItem('user', JSON.stringify(res.data.user)); 

      dispatch({
        type: "NOTIFY",
        payload: {
          success: res.data.msg
        }
      });

      // Return a success status
      return { success: true };

    } else {
      dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.data.msg
        }
      });

      return { success: false };
    }

  } catch (error) { 
      dispatch({
        type: 'NOTIFY',
        payload: {
          error: 'An unexpected error occurred. Please try again.'
      }});

      return { success: false };
  }
}

export const refreshToken = () => async (dispatch) => {
  const firstLogin = localStorage.getItem('firstLogin');

  if (firstLogin) {
    const res = await axios.post(`/api/refresh_token`);
    const user = JSON.parse(localStorage.getItem('user'));

    dispatch({ 
      type: "AUTH",
      payload: {
        token: res.data.access_token,
        user: user, 
      },
    });
  }
};