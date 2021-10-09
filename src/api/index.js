import configUrl from '../config/index';
import home from './home';
import sider from './sider';

const apiUrl = configUrl.baseUrl[process.env.REACT_APP_ENV];
const API = {
    // // 获取登录 图文验证码
    // getCaptcha: `${apiUrl}/captcha.jpg`,
    ...home,
    ...sider,
};
export default API;
