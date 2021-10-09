import { message } from 'antd';
import configUrl from '@/config/index';

export const uploadUrl = `${configUrl.baseUrl[process.env.REACT_APP_ENV]}/common/upload`;
export const JPG = 'image/jpeg';
export const PNG = 'image/png';
export const Excel = '';
export const docxType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
export const versionValidator = (rule, value) => {
    try {
        if (/^[0-9]+.[0-9]+.[0-9]+$/g.test(value)) {
            return Promise.resolve();
        }
            return Promise.reject('版本号不正确！');
    } catch (err) {
        return Promise.reject(err);
    }
};

export const numberValidator = (rule, value) => {
    try {
        if (value > 0) {
            return Promise.resolve();
        }
            return Promise.reject('申请数量不能小于等于0！');
    } catch (err) {
        return Promise.reject(err);
    }
};

export const phoneValidator = (rule, value) => {
    // 手机号验证
    try {
        if (/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/g.test(value)) {
            return Promise.resolve();
        }
            return Promise.reject('手机号不正确！');
    } catch (err) {
        return Promise.reject(err);
    }
};
export const blankValidator = (rule, value) => {
    // 银行卡号验证
    try {
        if (/^([1-9]{1}){9,30}$/g.test(value)) {
            return Promise.resolve();
        }
            return Promise.reject('银行账户不正确！');
    } catch (err) {
        return Promise.reject(err);
    }
};

export const userNameValidator = (rule, value) => {
    try {
        if (/^[\u4E00-\u9FA5]{2,6}$/g.test(value)) {
            return Promise.resolve();
        }
            return Promise.reject('姓名只能为中文！');
    } catch (err) {
        return Promise.reject(err);
    }
};

export const idCardValidator = (rule, value) => {
    try {
        if (/^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/g.test(value)) {
            return Promise.resolve();
        }
            return Promise.reject('证件号不正确！');
    } catch (err) {
        return Promise.reject(err);
    }
};

export const fileValidator = (rule, value) => {
    try {
        if (value?.length) {
            return Promise.resolve();
        }
            return Promise.reject('请上传！');
    } catch (err) {
        return Promise.reject(err);
    }
};

export const normFile = e => {
    const { fileList = [] } = e || {};
    const fileArr = Array.isArray(e) ? e : fileList;
    // 此处进行 文件类型 过滤
    const newFileList = fileArr.filter(item => item.type === JPG || item.type === PNG);
    return newFileList;
};

export const beforeUploadImgFile = (file) => {
    const isJpgOrPng = file.type === JPG || file.type === PNG;
    const isLt2M = file.size / 1024 / 1024 < 80;
    if (!isJpgOrPng) {
        message.error('请上传jpeg/png格式图片');
        return false;
    }
    if (!isLt2M) {
        message.error('图片大小超过80M');
        return false;
    }
    return true;
};

export const docxNormFile = e => {
    const { fileList = [] } = e || {};
    const fileArr = Array.isArray(e) ? e : fileList;
    // 此处进行 文件类型 过滤
    const newFileList = fileArr.filter(item => item.type === docxType);
    return newFileList;
};

export const beforeUploadDocxFile = (file) => {
    const isJpgOrPng = file.type === docxType;
    if (!isJpgOrPng) {
        message.error('请上传docx格式文件');
        return false;
    }
    return true;
};

export const beforeUploadExlceFile = (file) => {
    const isJpgOrPng = file.type === docxType;
    if (!isJpgOrPng) {
        message.error('请上传Excel格式文件');
        return false;
    }
    return true;
};
