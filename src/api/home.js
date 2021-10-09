import configUrl from '../config/index';

const apiUrl = configUrl.baseUrl[process.env.REACT_APP_ENV];
const API = {
    // 首页业务数据
    getHomeBusinessData: `${apiUrl}/home/businessData`,
};
export default API;
