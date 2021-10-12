import Service from './Service';

export default {
	state: {
		listData: [
			{
				id: 0,
				name: '项目一', // 项目名称
				status: '1',	// 项目状态 utils  中 projectStatus
				progress: '60', // 项目进度
				updateTime: '2021-10-12 20:20:10', // 最后更新时间
				memberId: ['1-1', '1-2-2', '1-2-4-3', '7-4'],
				member: [
					{
						id: 1,
						name: '王先生1',
						departments: '1',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122223333',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '1', // 主管
						jobTitle: '总裁', // 职务
					},
					{
						id: 2,
						name: '王先生2',
						departments: '2',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '2', // 主管
						jobTitle: '总裁办经理', // 职务
					},
					{
						id: 3,
						name: '王先生3',
						departments: '4,5,6',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 0,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '3', // 主管
						jobTitle: '法务主管', // 职务
					},
					{
						id: 4,
						name: '王先生4',
						departments: '7,8,9',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '7', // 主管
						jobTitle: '客服主管', // 职务
					},
				], // 项目成员
				logo: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',	// 项目logo
				startTime: '2021-09-12',	// 开始时间
				endTime: '2021-10-12',	// 结束时间
				principalId: '1-1', // 负责人id
				principal: {
					id: 1,
					name: '王先生1',
					departments: '1',
					url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
					status: 1,
					mobile: '15122223333',
					createTime: '2021-10-07 12:00:01',
					role: '', // 角色
					director: '1', // 主管
					jobTitle: '总裁', // 职务
				},
				tag: '#13c2c2',	// 项目标记颜色
				describe: '这里是项目描述',	// 项目描述
				visibleRange: 1,	// 可见范围
				files: [],	// 项目附件
			},
			{
				id: 1,
				name: '项目一', // 项目名称
				status: '2',	// 项目状态 utils  中 projectStatus
				progress: '100', // 项目进度
				updateTime: '2021-10-12 20:20:10', // 最后更新时间
				memberId: ['1-1', '1-2-2', '1-2-4-3', '7-4'],
				member: [
					{
						id: 1,
						name: '王先生1',
						departments: '1',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122223333',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '1', // 主管
						jobTitle: '总裁', // 职务
					},
					{
						id: 2,
						name: '王先生2',
						departments: '2',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '2', // 主管
						jobTitle: '总裁办经理', // 职务
					},
					{
						id: 3,
						name: '王先生3',
						departments: '4,5,6',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 0,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '3', // 主管
						jobTitle: '法务主管', // 职务
					},
					{
						id: 4,
						name: '王先生4',
						departments: '7,8,9',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '7', // 主管
						jobTitle: '客服主管', // 职务
					},
				], // 项目成员
				logo: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',	// 项目logo
				startTime: '2021-09-12',	// 开始时间
				endTime: '2021-10-12',	// 结束时间
				principalId: '1-1', // 负责人id
				principal: {
					id: 1,
					name: '王先生1',
					departments: '1',
					url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
					status: 1,
					mobile: '15122223333',
					createTime: '2021-10-07 12:00:01',
					role: '', // 角色
					director: '1', // 主管
					jobTitle: '总裁', // 职务
				},
				tag: '#13c2c2',	// 项目标记颜色
				describe: '这里是项目描述',	// 项目描述
				visibleRange: 0,	// 可见范围
				files: [],	// 项目附件
			},
			{
				id: 2,
				name: '项目一', // 项目名称
				status: '3',	// 项目状态 utils  中 projectStatus
				progress: '60', // 项目进度
				updateTime: '2021-10-12 20:20:10', // 最后更新时间
				memberId: ['1-1', '1-2-2', '1-2-4-3', '7-4'],
				member: [
					{
						id: 1,
						name: '王先生1',
						departments: '1',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122223333',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '1', // 主管
						jobTitle: '总裁', // 职务
					},
					{
						id: 2,
						name: '王先生2',
						departments: '2',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '2', // 主管
						jobTitle: '总裁办经理', // 职务
					},
					{
						id: 3,
						name: '王先生3',
						departments: '4,5,6',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 0,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '3', // 主管
						jobTitle: '法务主管', // 职务
					},
					{
						id: 4,
						name: '王先生4',
						departments: '7,8,9',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '7', // 主管
						jobTitle: '客服主管', // 职务
					},
				], // 项目成员
				logo: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',	// 项目logo
				startTime: '2021-09-12',	// 开始时间
				endTime: '2021-10-12',	// 结束时间
				principalId: '1-1', // 负责人id
				principal: {
					id: 1,
					name: '王先生1',
					departments: '1',
					url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
					status: 1,
					mobile: '15122223333',
					createTime: '2021-10-07 12:00:01',
					role: '', // 角色
					director: '1', // 主管
					jobTitle: '总裁', // 职务
				},
				tag: '#13c2c2',	// 项目标记颜色
				describe: '这里是项目描述',	// 项目描述
				visibleRange: 1,	// 可见范围
				files: [],	// 项目附件
			},
			{
				id: 3,
				name: '项目一', // 项目名称
				status: '4',	// 项目状态 utils  中 projectStatus
				progress: '60', // 项目进度
				updateTime: '2021-10-12 20:20:10', // 最后更新时间
				memberId: ['1-1', '1-2-2', '1-2-4-3', '7-4'],
				member: [
					{
						id: 1,
						name: '王先生1',
						departments: '1',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122223333',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '1', // 主管
						jobTitle: '总裁', // 职务
					},
					{
						id: 2,
						name: '王先生2',
						departments: '2',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '2', // 主管
						jobTitle: '总裁办经理', // 职务
					},
					{
						id: 3,
						name: '王先生3',
						departments: '4,5,6',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 0,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '3', // 主管
						jobTitle: '法务主管', // 职务
					},
					{
						id: 4,
						name: '王先生4',
						departments: '7,8,9',
						url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						status: 1,
						mobile: '15122225555',
						createTime: '2021-10-07 12:00:01',
						role: '', // 角色
						director: '7', // 主管
						jobTitle: '客服主管', // 职务
					},
				], // 项目成员
				logo: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',	// 项目logo
				startTime: '2021-09-12',	// 开始时间
				endTime: '2021-10-12',	// 结束时间
				principalId: '1-1', // 负责人id
				principal: {
					id: 1,
					name: '王先生1',
					departments: '1',
					url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
					status: 1,
					mobile: '15122223333',
					createTime: '2021-10-07 12:00:01',
					role: '', // 角色
					director: '1', // 主管
					jobTitle: '总裁', // 职务
				},
				tag: '#13c2c2',	// 项目标记颜色
				describe: '这里是项目描述',	// 项目描述
				visibleRange: 0,	// 可见范围
				files: [],	// 项目附件
			},
		],
	},
	reducers: {
		setStateInfo(state, data) {
			return { ...state, ...data };
		},
	},
	effects: () => ({
		// async getHomeBusinessData(params) {
		// 	const rep = await Service.getHomeBusinessData(params);
		// 	return rep;
		// },
		async setTaskList(params, { project = {} }) {
            const { listData } = project;
			let newListData = [];
			const isUpdate = listData.filter(item => item.id === params.id);
			if (isUpdate.length) {
				newListData = listData.map(item => {
					let newItem = item;
					if (item.id === params.id) {
						newItem = params;
					}
					return newItem;
				});
			} else {
				newListData = [params, ...listData];
			}

            this.setStateInfo({ listData: newListData });
        },
	}),

};
