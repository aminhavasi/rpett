import axios from 'axios';
import { notify } from './../utils/toast';
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        notify('error', 'Internet Error');
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
