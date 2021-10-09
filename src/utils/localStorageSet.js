export const setLoginInfo = (values = {}) => {
    localStorage.setItem('loginInfo', JSON.stringify(values));
};

export const getLoginInfo = () => {
    const loginStr = localStorage.getItem('loginInfo') || '{}';
    return JSON.parse(loginStr);
};

export const setUserInfo = (values = {}) => {
    localStorage.setItem('oaUserInfo', JSON.stringify(values));
};

export const getUserInfo = () => {
    const loginStr = localStorage.getItem('oaUserInfo') || '{}';
    return JSON.parse(loginStr);
};

export const clearUserInfo = () => {
    localStorage.removeItem('oaUserInfo');
    return true;
};
