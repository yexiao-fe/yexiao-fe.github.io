import axios from "axios";

const apiProxy: any = {}
// 代理数组
const PROXY_NAMES = [
    { name: 'api', baseURL: '/prefix/' }
]

// 创建实例
PROXY_NAMES.forEach((api) => {
    const { name, baseURL } = api
    apiProxy[name] = axios.create({
        baseURL
    })
    // 添加请求拦截器
    apiProxy[name].interceptors.request.use(function (config:object) {
        // 在发送请求之前做些什么
        return config;
    }, function (error:any) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    apiProxy[name].interceptors.response.use(function (response: any) {
        // 对响应数据做点什么
        console.log(response)
        return response.data;
    }, function (error: any) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
})
export default apiProxy