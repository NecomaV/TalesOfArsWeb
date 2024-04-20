import { postDataAPI } from "../../utils/fetchData"
import axios from 'axios'

// Define a types constant holding action types
export const TYPES = {
    AUTH : 'AUTH'
}

// Define action for login
export const login = (data) => async (dispatch) => {
  try {
    // Send login request
    const res = await axios.post(`/api/login`, data);

    // Dispatch corresponding action with data received from the server
    dispatch({
      type: TYPES.AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user,
      },
    });

    // Persist login state in the local storage
    localStorage.setItem('firstLogin', true);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  } catch (err) {
    // Dispatch notification of error message if any
    dispatch({
      type: "NOTIFY",
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

// Define action for logout
export const logout = () => async (dispatch) => {
  // Send request to logout API
  const res = await postDataAPI('logout');
  console.log('logout response: ', res); 

  // Dispatch corresponding action with nullified user data
  dispatch({
    type: "AUTH",
    payload: {
      token: null,
      user: null,
    },
  });

  // Remove persisted login state
  localStorage.removeItem('firstLogin');

  // Dispatch notification of successful logout if any
  dispatch({
    type: "NOTIFY",
    payload: {
      success: res.data.msg
    },
  });
};


// Define action for register
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

// Define action for refreshing token
export const refreshToken = () => async (dispatch) => {
  const firstLogin = localStorage.getItem('firstLogin');

  if (firstLogin) {
    const res = await axios.post(`/api/refresh_token`);
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch({ 
      type: TYPES.AUTH,
      payload: {
        token: res.data.access_token,
        user: user, 
      },
    });
  }
};
