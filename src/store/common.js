import moment from 'moment';
import CommonService from './CommonService';

const CommonServices = new CommonService();
export default {
    state: {
        // productList: [],
        departmentList: [
            {
                id: 1,
                name: '总裁办',
                status: 1,
                director: '王先生',
                describe: '总裁办描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 2,
                        name: '总裁办_下属1',
                        status: 1,
                        director: '王先生_1',
                        describe: '总裁办描述_1',
                        updateTime: '2021-10-06',
                        children: [
                            {
                                id: 3,
                                name: '总裁办_下属1_1',
                                status: 1,
                                director: '王先生_1_1',
                                describe: '总裁办描述_1_1',
                                updateTime: '2021-10-06',
                            },
                            {
                                id: 4,
                                name: '总裁办_下属1_1',
                                status: 1,
                                director: '王先生_1_1',
                                describe: '总裁办描述_1_1',
                                updateTime: '2021-10-06',
                            },
                        ],
                    },
                    {
                        id: 5,
                        name: '总裁办_下属2',
                        status: 1,
                        director: '王先生_2',
                        describe: '总裁办描述_2',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 6,
                        name: '总裁办_下属2',
                        status: 1,
                        director: '王先生_2',
                        describe: '总裁办描述_2',
                        updateTime: '2021-10-06',
                    },
                ],
            },
            {
                id: 7,
                name: '行政部',
                status: 1,
                director: '王先生',
                describe: '行政部描述',
                updateTime: '2021-10-06',
            },
            {
                id: 8,
                name: '人事部',
                status: 1,
                director: '王先生',
                describe: '人事部描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 9,
                        name: '人事部_下属1',
                        status: 1,
                        director: '王先生_1',
                        describe: '人事部描述_1',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 10,
                        name: '人事部_下属2',
                        status: 0,
                        director: '王先生_2',
                        describe: '人事部描述_2',
                        updateTime: '2021-10-06',
                    },
                ],
            },
            {
                id: 11,
                name: '销售部',
                status: 1,
                director: '王先生',
                describe: '销售部描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 12,
                        name: '销售部_下属1',
                        status: 0,
                        director: '王先生_1',
                        describe: '销售部描述_1',
                        updateTime: '2021-10-06',
                        children: [
                            {
                                id: 13,
                                name: '销售部_下属1_1',
                                status: 0,
                                director: '王先生_1_1',
                                describe: '销售部描述_1_1',
                                updateTime: '2021-10-06',
                                children: [
                                    {
                                        id: 14,
                                        name: '销售部_下属1_1_1',
                                        status: 0,
                                        director: '王先生_1_1_1',
                                        describe: '销售部描述_1_1_1',
                                        updateTime: '2021-10-06',
                                        children: [
                                            {
                                                id: 15,
                                                name: '销售部_下属1_1_1_1',
                                                status: 0,
                                                director: '王先生_1_1_1_1',
                                                describe: '销售部描述_1_1_1_1',
                                                updateTime: '2021-10-06',
                                                children: [
                                                    {
                                                        id: 16,
                                                        name: '销售部_下属1_1_1_1_1',
                                                        status: 0,
                                                        director: '王先生_1_1_1_1_1',
                                                        describe: '销售部描述_1_1_1_1_1',
                                                        updateTime: '2021-10-06',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 17,
                        name: '销售部_下属2',
                        status: 0,
                        director: '王先生_2',
                        describe: '销售部描述_2',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 18,
                        name: '销售部_下属3',
                        status: 0,
                        director: '王先生_3',
                        describe: '销售部描述_3',
                        updateTime: '2021-10-06',
                    },
                ],
            },
            {
                id: 19,
                name: '总裁办',
                status: 1,
                director: '王先生',
                describe: '总裁办描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 20,
                        name: '总裁办_下属1',
                        status: 1,
                        director: '王先生_1',
                        describe: '总裁办描述_1',
                        updateTime: '2021-10-06',
                        children: [
                            {
                                id: 21,
                                name: '总裁办_下属1_1',
                                status: 1,
                                director: '王先生_1_1',
                                describe: '总裁办描述_1_1',
                                updateTime: '2021-10-06',
                            },
                            {
                                id: 22,
                                name: '总裁办_下属1_1',
                                status: 1,
                                director: '王先生_1_1',
                                describe: '总裁办描述_1_1',
                                updateTime: '2021-10-06',
                            },
                        ],
                    },
                    {
                        id: 23,
                        name: '总裁办_下属2',
                        status: 1,
                        director: '王先生_2',
                        describe: '总裁办描述_2',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 24,
                        name: '总裁办_下属2',
                        status: 1,
                        director: '王先生_2',
                        describe: '总裁办描述_2',
                        updateTime: '2021-10-06',
                    },
                ],
            },
            {
                id: 25,
                name: '行政部',
                status: 1,
                director: '王先生',
                describe: '行政部描述',
                updateTime: '2021-10-06',
            },
            {
                id: 26,
                name: '人事部',
                status: 1,
                director: '王先生',
                describe: '人事部描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 27,
                        name: '人事部_下属1',
                        status: 1,
                        director: '王先生_1',
                        describe: '人事部描述_1',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 28,
                        name: '人事部_下属2',
                        status: 0,
                        director: '王先生_2',
                        describe: '人事部描述_2',
                        updateTime: '2021-10-06',
                    },
                ],
            },
            {
                id: 29,
                name: '销售部',
                status: 1,
                director: '王先生',
                describe: '销售部描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 30,
                        name: '销售部_下属1',
                        status: 0,
                        director: '王先生_1',
                        describe: '销售部描述_1',
                        updateTime: '2021-10-06',
                        children: [
                            {
                                id: 31,
                                name: '销售部_下属1_1',
                                status: 0,
                                director: '王先生_1_1',
                                describe: '销售部描述_1_1',
                                updateTime: '2021-10-06',
                                children: [
                                    {
                                        id: 32,
                                        name: '销售部_下属1_1_1',
                                        status: 0,
                                        director: '王先生_1_1_1',
                                        describe: '销售部描述_1_1_1',
                                        updateTime: '2021-10-06',
                                        children: [
                                            {
                                                id: 33,
                                                name: '销售部_下属1_1_1_1',
                                                status: 0,
                                                director: '王先生_1_1_1_1',
                                                describe: '销售部描述_1_1_1_1',
                                                updateTime: '2021-10-06',
                                                children: [
                                                    {
                                                        id: 34,
                                                        name: '销售部_下属1_1_1_1_1',
                                                        status: 0,
                                                        director: '王先生_1_1_1_1_1',
                                                        describe: '销售部描述_1_1_1_1_1',
                                                        updateTime: '2021-10-06',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 35,
                        name: '销售部_下属2',
                        status: 0,
                        director: '王先生_2',
                        describe: '销售部描述_2',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 36,
                        name: '销售部_下属3',
                        status: 0,
                        director: '王先生_3',
                        describe: '销售部描述_3',
                        updateTime: '2021-10-06',
                    },
                ],
            },
            {
                id: 37,
                name: '总裁办',
                status: 1,
                director: '王先生',
                describe: '总裁办描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 38,
                        name: '总裁办_下属1',
                        status: 1,
                        director: '王先生_1',
                        describe: '总裁办描述_1',
                        updateTime: '2021-10-06',
                        children: [
                            {
                                id: 39,
                                name: '总裁办_下属1_1',
                                status: 1,
                                director: '王先生_1_1',
                                describe: '总裁办描述_1_1',
                                updateTime: '2021-10-06',
                            },
                            {
                                id: 40,
                                name: '总裁办_下属1_1',
                                status: 1,
                                director: '王先生_1_1',
                                describe: '总裁办描述_1_1',
                                updateTime: '2021-10-06',
                            },
                        ],
                    },
                    {
                        id: 41,
                        name: '总裁办_下属2',
                        status: 1,
                        director: '王先生_2',
                        describe: '总裁办描述_2',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 42,
                        name: '总裁办_下属2',
                        status: 1,
                        director: '王先生_2',
                        describe: '总裁办描述_2',
                        updateTime: '2021-10-06',
                    },
                ],
            },
            {
                id: 43,
                name: '行政部',
                status: 1,
                director: '王先生',
                describe: '行政部描述',
                updateTime: '2021-10-06',
            },
            {
                id: 44,
                name: '人事部',
                status: 1,
                director: '王先生',
                describe: '人事部描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 45,
                        name: '人事部_下属1',
                        status: 1,
                        director: '王先生_1',
                        describe: '人事部描述_1',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 46,
                        name: '人事部_下属2',
                        status: 0,
                        director: '王先生_2',
                        describe: '人事部描述_2',
                        updateTime: '2021-10-06',
                    },
                ],
            },
            {
                id: 47,
                name: '销售部',
                status: 1,
                director: '王先生',
                describe: '销售部描述',
                updateTime: '2021-10-06',
                children: [
                    {
                        id: 48,
                        name: '销售部_下属1',
                        status: 0,
                        director: '王先生_1',
                        describe: '销售部描述_1',
                        updateTime: '2021-10-06',
                        children: [
                            {
                                id: 49,
                                name: '销售部_下属1_1',
                                status: 0,
                                director: '王先生_1_1',
                                describe: '销售部描述_1_1',
                                updateTime: '2021-10-06',
                                children: [
                                    {
                                        id: 50,
                                        name: '销售部_下属1_1_1',
                                        status: 0,
                                        director: '王先生_1_1_1',
                                        describe: '销售部描述_1_1_1',
                                        updateTime: '2021-10-06',
                                        children: [
                                            {
                                                id: 51,
                                                name: '销售部_下属1_1_1_1',
                                                status: 0,
                                                director: '王先生_1_1_1_1',
                                                describe: '销售部描述_1_1_1_1',
                                                updateTime: '2021-10-06',
                                                children: [
                                                    {
                                                        id: 52,
                                                        name: '销售部_下属1_1_1_1_1',
                                                        status: 0,
                                                        director: '王先生_1_1_1_1_1',
                                                        describe: '销售部描述_1_1_1_1_1',
                                                        updateTime: '2021-10-06',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 53,
                        name: '销售部_下属2',
                        status: 0,
                        director: '王先生_2',
                        describe: '销售部描述_2',
                        updateTime: '2021-10-06',
                    },
                    {
                        id: 54,
                        name: '销售部_下属3',
                        status: 0,
                        director: '王先生_3',
                        describe: '销售部描述_3',
                        updateTime: '2021-10-06',
                    },
                ],
            },
        ],
        personnelList: [
            {
                id: 1,
                name: '王先生1',
                departments: '1,2,3',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 2,
                name: '王先生2',
                departments: '2,3,4',
                status: 1,
                mobile: '15122225555',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 3,
                name: '王先生3',
                departments: '4,5,6',
                status: 0,
                mobile: '15122225555',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 4,
                name: '王先生4',
                departments: '7,8,9',
                status: 1,
                mobile: '15122225555',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 5,
                name: '王先生5',
                departments: '1,5,7',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 6,
                name: '李女士6',
                departments: '2,4,7',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 7,
                name: '李女士7',
                departments: '3,6,9',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 8,
                name: '李女士8',
                departments: '6,10,12',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 9,
                name: '王先生9',
                departments: '1,5,7',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 10,
                name: '王先生10',
                departments: '1,5,7',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
            },
            {
                id: 11,
                name: '王先生11',
                departments: '1,5,7',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
            },
        ],
    },
    reducers: {
        setStateInfo(state, data) {
            return { ...state, ...data };
        },
    },
    effects: () => ({
        // 此处dispatch 可调用其他组件的 effects  eg： dispatch.count.increment(params);
        // 添加联系人
        async setPersonnelList(params, { Common = {} }) {
            // 往 personnelList 中注入
            const { personnelList } = Common;
            const newItem = {
                ...params,
                id: 100 + window.parseInt(Math.random() * 100),
                name: params.name,
                departments: params.department.join(','),
                status: 1,
                mobile: params.mobile,
                createTime: moment().format('YYYY-MM-DD HH:MM:SS'),
            };
            personnelList.unshift(newItem);
            this.setStateInfo({ personnelList });
        },
        // 添加部门
        async setDepartmentList(params, { Common = {} }) {
            // 往 departmentList 中注入 新部门
            const { departmentList } = Common;
            const findTargetId = (arr = [], par) => {
                arr.map(item => {
                    if (item.id === par.superior) {
                        const newItem = {
                            id: 100 + window.parseInt(Math.random() * 100),
                            name: par.departmentName,
                            status: 1,
                            director: '',
                            describe: par.description,
                            updateTime: moment().format('YYYY-MM-DD'),
                        };
                        if (!item.children) {
                            item.children = [newItem];
                        } else {
                            item.children.push(newItem);
                        }
                    } else if (item.id !== par.superior && item.children && Array.isArray(item.children)) {
                        findTargetId(item.children, par);
                    }
                    return null;
                });
            };
            findTargetId(departmentList, params);
        },
    }),
};
