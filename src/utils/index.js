import moment from 'moment';

export const selectActiveRouterPath = (routerArr, pathname, brandArr) => {
	return routerArr.filter((item) => {
		if (item.path === pathname) {
			brandArr.push(item);
			return true;
		} if (item.children && item.children.length) {
			const hasArr = selectActiveRouterPath(item.children, pathname, brandArr);
			if (hasArr && hasArr.length) {
				brandArr.push(item);
			}
			return !!hasArr.length;
		}
			return false;
	});
};

export const getUUID = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
	  return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16);
	});
};

export const mobileReg = {
	reg: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
	msg: '!手机号码格式不正确',
};

export const getStoreUserInfo = () => {
	const userInfoStr = localStorage.getItem('userInfo');
	const userInfo = userInfoStr ? JSON.parse(userInfoStr) : {};
	return userInfo;
};

export const formItemLayout = (label = 8, wrapper = 16) => {
    return {
        labelCol: {
            xs: { span: 24 },
            sm: { span: label },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: wrapper },
        },
    };
};

export const getWidthLength = (dataArr, keysArr) => {
    const keyObj = {};
    keysArr.map(item => {
        const keyItemArr = dataArr.map(value => {
            return value[item]?.length || 0;
        });
        keyObj[item] = keyItemArr.length ? Math.max(...keyItemArr) : 0;
        return null;
    });
    return keyObj;
};

export const getUrlParams = (name) => {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};

export const getUrlCNParams = (name) => {
	const str = window.location.search.substr(1);
	const paramsArr = str.split('&');
	const activeArr = paramsArr.filter((item) => item.indexOf(name) > -1);
	let activeValue = '';
	if (activeArr && activeArr.length) {
		activeValue = activeArr[0].replace(`${name}=`, '');
	}
    return decodeURIComponent(activeValue);
};

export const exportExcelFile = (data, name, type = 'xlsx') => {
	const newTimer = moment().format('YYYY-MM-DD');
	const link = document.createElement('a');
	const blob = new Blob([data], { type: 'application/vnd.ms-excel;charset=utf-8' });
	const objectUrl = URL.createObjectURL(blob); // 创建URL
	link.href = objectUrl;
	const fileName = `${name}-${newTimer}`;
	link.download = `${decodeURIComponent(fileName)}.${type}`; // 自定义文件名
	link.click(); // 下载文件
	URL.revokeObjectURL(objectUrl); // 释放内存
};

export const setTreeDataFun = (arr, id = '') => {
	const newArr = [];
	arr.map(item => {
		if (item.parent === id) {
			const childrenArr = arr.filter(it => it.parent === item.id);
			if (childrenArr.length) {
				childrenArr.map(it => {
					const childrenItemArr = setTreeDataFun(arr, it.id);
					it.children = childrenItemArr;
					return null;
				});
				item.children = childrenArr;
			}
		}
		if (item.parent === id) {
			newArr.push(item);
		}
		return null;
	});
	return newArr;
 };

export const directorArr = [
    { value: 0, label: '直接主管' },
    { value: 1, label: '二级主管' },
    { value: 2, label: '三级主管' },
    { value: 3, label: '四级主管' },
];

export const statusArr = [
	{
		value: 0,
		label: '审批中',
		color: '#333',
	},
	{
		value: 1,
		label: '已撤销',
		color: '#999',
	},
	{
		value: 2,
		label: '审核未通过',
		color: '#cf1322',
	},
	{
		value: 3,
		label: '审核通过',
		color: '#389e0d',
	},
];

export const projectStatus = [
	{
		label: '进行中',
		value: '1',
		color: '#1890ff',
	},
	{
		label: '已完成',
		value: '2',
		color: '#389e0d',
	},
	{
		label: '已延期',
		value: '3',
		color: '#fadb14',
	},
	{
		label: '已取消',
		value: '4',
		color: '#cf1322',
	},
];

export const colorList = [
	{
		label: 0,
		value: '#f5222d',
	},
	{
		label: 1,
		value: '#fa8c16',
	},
	{
		label: 2,
		value: '#faad14',
	},
	{
		label: 3,
		value: '#fadb14',
	},
	{
		label: 4,
		value: '#a0d911',
	},
	{
		label: 5,
		value: '#52c41a',
	},
	{
		label: 6,
		value: '#13c2c2',
	},
	{
		label: 7,
		value: '#1890ff',
	},
	{
		label: 8,
		value: '#722ed1',
	},
	{
		label: 9,
		value: '#eb2f96',
	},
];
