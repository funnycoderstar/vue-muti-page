import axios from 'axios';
import config from './client';

const fetch = axios.create({
    baseURL: config.root,
    timeout: 2000,
    headers: {
        site: 'pc',
    },
    validateStatus(status) {
        return status >= 100 && status < 600;
    },
});
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    // 在发送请求之前做某件事
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    _.toast('错误的传参', 'fail');
    return Promise.reject(error);
});
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
	// 对响应数据做些事
    if (!res.data.success) {
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    _.toast('网络异常', 'fail');
    return Promise.reject(error);
});
// 返回一个Promise(发送post请求)
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((response) => {
                resolve(response.data);
            }, (err) => {
                reject(err);
            })
            .catch((error) => {
                reject(error);
            });
    });
}


function handleResponse(res) {
    if (res.status >= 400) {
        message.error(res.data.message || res.data.data);
    } else {
        return res.data.data;
    }
}

class Fetch {
    static get(url) {
        return fetch
            .get(url)
            .then(handleResponse);
    }
    static post(url, data) {
        return fetch
            .post(url, data)
            .then(handleResponse);
    }
    static delete(url) {
        return fetch
            .delete(url)
            .then(handleResponse);
    }
}

export default Fetch;
