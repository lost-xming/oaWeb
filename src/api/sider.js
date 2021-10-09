import configUrl from '../config/index';

const apiUrl = configUrl.baseUrl[process.env.REACT_APP_ENV];
const API = {
    // 获取侧边栏渠道列表
    getUserProductList: `${apiUrl}/tbChannel/getUserProductList`,
};
export default API;
