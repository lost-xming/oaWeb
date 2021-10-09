import { init } from '@rematch/core';
import SiderStore from '@/components/sider/store';
import loginCom from '@/components/login/store';
import homeCom from '@/app/home/store';
import Common from './common';

const store = init({
    models: {
        Common,
        SiderStore,
        loginCom,
        homeCom,
    },
});

export default store;
