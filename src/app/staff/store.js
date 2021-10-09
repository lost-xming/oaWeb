import Service from './Service';

export default {
	state: {},
	reducers: {
		setStateData(state, data) {
			return { ...state, ...data };
		},
	},
	effects: () => ({
		// async getHomeBusinessData(params) {
		// 	const rep = await Service.getHomeBusinessData(params);
		// 	return rep;
		// },

	}),

};
