import axios from 'axios';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: 'http://wwww.pandemo.top:8001',
    timeout: '5000'
});

requests.interceptors.request.use(
    config => {
        nprogress.start();

        return config;
    }
);

requests.interceptors.response.use(
    res => {
        nprogress.done();

        return res.data;
    },
    error => {
        nprogress.done();
        return Promise.reject(new Error('failed'));
    }
);

export default requests;
