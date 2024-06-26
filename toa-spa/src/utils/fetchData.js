import axios from 'axios';

// Define a function to perform GET requests
export const getDataAPI = async (url, token) => {
    const res = await axios.get(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}

// Define a function to perform POST requests
export const postDataAPI = async (url, post, token) => {
    let res;
    try {
        res = await axios.post(`/api/${url}`, post, {
            headers: { Authorization: token }
        });
    } catch (error) {
        if (error.response) {
            console.error('Request failed:', error.response.data);
            res = error.response;
        } else {
            throw error;
        }
    }
    return res;
};

// Define a function to perform PUT requests
export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

// Define a function to perform PATCH requests
export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

// Define a function to perform DELETE requests
export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}