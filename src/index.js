import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, message } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Provider } from 'react-redux';
import moment from 'moment';
import store from '@/store/index';
import 'moment/locale/zh-cn';
import App from './app/App';
import './index.less';

moment.locale('zh-cn');
// message全局配置
message.config({
	top: '15%',
	duration: 3,
	maxCount: 1,
});
ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<Provider store={store}>
			<App />
		</Provider>
	</ConfigProvider>,
	document.getElementById('root'),
);
