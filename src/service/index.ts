import axios from "axios";
import qs from "qs";
axios.defaults.withCredentials = false;

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //  api的base_url
  timeout: 1000 * 60 * 5, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config: any) => {
    /*格式化参数*/
    if (config.qsRequire) {
      let data = config.data;
      if (data && data instanceof Object) {
        config.data = qs.stringify(config.data);
      }
    }

    return config;
  },
  (error) => {
    Promise.reject(error).catch((err) => {
      console.log(err);
    });
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res) {
      return res;
    } else
      return Promise.reject("error").catch((err) => {
        console.log(err);
      });
  },
  (error) => {
    return Promise.reject(error).catch((err) => {
      console.log(err);
    });
  }
);
export default service;
