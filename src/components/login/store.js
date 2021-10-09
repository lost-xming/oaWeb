import { getUUID } from '@/utils/index';
import Service from './Service';

export default {
    state: {},
    reducers: {
        setStateData(state, data) {
            return { ...state, ...data };
        },
    },
    effects: () => ({
        // async getCaptcha() {
        //     const uuid = getUUID();
        //     localStorage.setItem('uuid', uuid);
        //     const rep = await Service.getCaptcha(uuid);
        //     return window.URL.createObjectURL(rep.data);
        // },
    }),

};
