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
                parent: '',
            },
            {
                id: 2,
                name: '总裁办_下属1',
                status: 1,
                director: '王先生_1',
                describe: '总裁办描述_1',
                updateTime: '2021-10-06',
                parent: 1,
            },
            {
                id: 3,
                name: '总裁办_下属1_1',
                status: 1,
                director: '王先生_1_1',
                describe: '总裁办描述_1_1',
                updateTime: '2021-10-06',
                parent: 2,
            },
            {
                id: 4,
                name: '总裁办_下属1_1',
                status: 1,
                director: '王先生_1_1',
                describe: '总裁办描述_1_1',
                updateTime: '2021-10-06',
                parent: 2,
            },
            {
                id: 5,
                name: '总裁办_下属2',
                status: 1,
                director: '王先生_2',
                describe: '总裁办描述_2',
                updateTime: '2021-10-06',
                parent: 1,
            },
            {
                id: 6,
                name: '总裁办_下属2',
                status: 1,
                director: '王先生_2',
                describe: '总裁办描述_2',
                updateTime: '2021-10-06',
                parent: 1,
            },
            {
                id: 7,
                name: '行政部',
                status: 1,
                director: '王先生',
                describe: '行政部描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 8,
                name: '人事部',
                status: 1,
                director: '王先生',
                describe: '人事部描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 9,
                name: '人事部_下属1',
                status: 1,
                director: '王先生_1',
                describe: '人事部描述_1',
                updateTime: '2021-10-06',
                parent: 8,
            },
            {
                id: 10,
                name: '人事部_下属2',
                status: 0,
                director: '王先生_2',
                describe: '人事部描述_2',
                updateTime: '2021-10-06',
                parent: 8,
            },
            {
                id: 11,
                name: '销售部',
                status: 1,
                director: '王先生',
                describe: '销售部描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 12,
                name: '销售部_下属1',
                status: 0,
                director: '王先生_1',
                describe: '销售部描述_1',
                updateTime: '2021-10-06',
                parent: 11,
            },
            {
                id: 13,
                name: '销售部_下属1_1',
                status: 0,
                director: '王先生_1_1',
                describe: '销售部描述_1_1',
                updateTime: '2021-10-06',
                parent: 12,
            },
            {
                id: 14,
                name: '销售部_下属1_1_1',
                status: 0,
                director: '王先生_1_1_1',
                describe: '销售部描述_1_1_1',
                updateTime: '2021-10-06',
                parent: 13,
            },
            {
                id: 15,
                name: '销售部_下属1_1_1_1',
                status: 0,
                director: '王先生_1_1_1_1',
                describe: '销售部描述_1_1_1_1',
                updateTime: '2021-10-06',
                parent: 14,
            },
            {
                id: 16,
                name: '销售部_下属1_1_1_1_1',
                status: 0,
                director: '王先生_1_1_1_1_1',
                describe: '销售部描述_1_1_1_1_1',
                updateTime: '2021-10-06',
                parent: 15,
            },
            {
                id: 17,
                name: '销售部_下属2',
                status: 0,
                director: '王先生_2',
                describe: '销售部描述_2',
                updateTime: '2021-10-06',
                parent: 11,
            },
            {
                id: 18,
                name: '销售部_下属3',
                status: 0,
                director: '王先生_3',
                describe: '销售部描述_3',
                updateTime: '2021-10-06',
                parent: 11,
            },
            {
                id: 19,
                name: '总裁办',
                status: 1,
                director: '王先生',
                describe: '总裁办描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 20,
                name: '总裁办_下属1',
                status: 1,
                director: '王先生_1',
                describe: '总裁办描述_1',
                updateTime: '2021-10-06',
                parent: 19,
            },
            {
                id: 21,
                name: '总裁办_下属1_1',
                status: 1,
                director: '王先生_1_1',
                describe: '总裁办描述_1_1',
                updateTime: '2021-10-06',
                parent: 20,
            },
            {
                id: 22,
                name: '总裁办_下属1_1',
                status: 1,
                director: '王先生_1_1',
                describe: '总裁办描述_1_1',
                updateTime: '2021-10-06',
                parent: 20,
            },
            {
                id: 23,
                name: '总裁办_下属2',
                status: 1,
                director: '王先生_2',
                describe: '总裁办描述_2',
                updateTime: '2021-10-06',
                parent: 19,
            },
            {
                id: 24,
                name: '总裁办_下属2',
                status: 1,
                director: '王先生_2',
                describe: '总裁办描述_2',
                updateTime: '2021-10-06',
                parent: 19,
            },
            {
                id: 25,
                name: '行政部',
                status: 1,
                director: '王先生',
                describe: '行政部描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 26,
                name: '人事部',
                status: 1,
                director: '王先生',
                describe: '人事部描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 27,
                name: '人事部_下属1',
                status: 1,
                director: '王先生_1',
                describe: '人事部描述_1',
                updateTime: '2021-10-06',
                parent: 26,
            },
            {
                id: 28,
                name: '人事部_下属2',
                status: 0,
                director: '王先生_2',
                describe: '人事部描述_2',
                updateTime: '2021-10-06',
                parent: 26,
            },
            {
                id: 29,
                name: '销售部',
                status: 1,
                director: '王先生',
                describe: '销售部描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 30,
                name: '销售部_下属1',
                status: 0,
                director: '王先生_1',
                describe: '销售部描述_1',
                updateTime: '2021-10-06',
                parent: 29,
            },
            {
                id: 31,
                name: '销售部_下属1_1',
                status: 0,
                director: '王先生_1_1',
                describe: '销售部描述_1_1',
                updateTime: '2021-10-06',
                parent: 30,
            },
            {
                id: 32,
                name: '销售部_下属1_1_1',
                status: 0,
                director: '王先生_1_1_1',
                describe: '销售部描述_1_1_1',
                updateTime: '2021-10-06',
                parent: 31,
            },
            {
                id: 33,
                name: '销售部_下属1_1_1_1',
                status: 0,
                director: '王先生_1_1_1_1',
                describe: '销售部描述_1_1_1_1',
                updateTime: '2021-10-06',
                parent: 32,
            },
            {
                id: 34,
                name: '销售部_下属1_1_1_1_1',
                status: 0,
                director: '王先生_1_1_1_1_1',
                describe: '销售部描述_1_1_1_1_1',
                updateTime: '2021-10-06',
                parent: 33,
            },
            {
                id: 35,
                name: '销售部_下属2',
                status: 0,
                director: '王先生_2',
                describe: '销售部描述_2',
                updateTime: '2021-10-06',
                parent: 29,
            },
            {
                id: 36,
                name: '销售部_下属3',
                status: 0,
                director: '王先生_3',
                describe: '销售部描述_3',
                updateTime: '2021-10-06',
                parent: 29,
            },
            {
                id: 37,
                name: '总裁办',
                status: 1,
                director: '王先生',
                describe: '总裁办描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 38,
                name: '总裁办_下属1',
                status: 1,
                director: '王先生_1',
                describe: '总裁办描述_1',
                updateTime: '2021-10-06',
                parent: 37,
            },
            {
                id: 39,
                name: '总裁办_下属1_1',
                status: 1,
                director: '王先生_1_1',
                describe: '总裁办描述_1_1',
                updateTime: '2021-10-06',
                parent: 38,
            },
            {
                id: 40,
                name: '总裁办_下属1_1',
                status: 1,
                director: '王先生_1_1',
                describe: '总裁办描述_1_1',
                updateTime: '2021-10-06',
                parent: 38,
            },

            {
                id: 41,
                name: '总裁办_下属2',
                status: 1,
                director: '王先生_2',
                describe: '总裁办描述_2',
                updateTime: '2021-10-06',
                parent: 37,
            },
            {
                id: 42,
                name: '总裁办_下属2',
                status: 1,
                director: '王先生_2',
                describe: '总裁办描述_2',
                updateTime: '2021-10-06',
                parent: 37,
            },
            {
                id: 43,
                name: '行政部',
                status: 1,
                director: '王先生',
                describe: '行政部描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 44,
                name: '人事部',
                status: 1,
                director: '王先生',
                describe: '人事部描述',
                updateTime: '2021-10-06',
                parent: '',
            },

            {
                id: 45,
                name: '人事部_下属1',
                status: 1,
                director: '王先生_1',
                describe: '人事部描述_1',
                updateTime: '2021-10-06',
                parent: 44,
            },
            {
                id: 46,
                name: '人事部_下属2',
                status: 0,
                director: '王先生_2',
                describe: '人事部描述_2',
                updateTime: '2021-10-06',
                parent: 44,
            },
            {
                id: 47,
                name: '销售部',
                status: 1,
                director: '王先生',
                describe: '销售部描述',
                updateTime: '2021-10-06',
                parent: '',
            },
            {
                id: 48,
                name: '销售部_下属1',
                status: 0,
                director: '王先生_1',
                describe: '销售部描述_1',
                updateTime: '2021-10-06',
                parent: 47,
            },
            {
                id: 49,
                name: '销售部_下属1_1',
                status: 0,
                director: '王先生_1_1',
                describe: '销售部描述_1_1',
                updateTime: '2021-10-06',
                parent: 48,
            },
            {
                id: 50,
                name: '销售部_下属1_1_1',
                status: 0,
                director: '王先生_1_1_1',
                describe: '销售部描述_1_1_1',
                updateTime: '2021-10-06',
                parent: 49,
            },

            {
                id: 51,
                name: '销售部_下属1_1_1_1',
                status: 0,
                director: '王先生_1_1_1_1',
                describe: '销售部描述_1_1_1_1',
                updateTime: '2021-10-06',
                parent: 50,
            },

            {
                id: 52,
                name: '销售部_下属1_1_1_1_1',
                status: 0,
                director: '王先生_1_1_1_1_1',
                describe: '销售部描述_1_1_1_1_1',
                updateTime: '2021-10-06',
                parent: 51,
            },
            {
                id: 53,
                name: '销售部_下属2',
                status: 0,
                director: '王先生_2',
                describe: '销售部描述_2',
                updateTime: '2021-10-06',
                parent: 47,
            },
            {
                id: 54,
                name: '销售部_下属3',
                status: 0,
                director: '王先生_3',
                describe: '销售部描述_3',
                updateTime: '2021-10-06',
                parent: 47,
            },
        ],
        personnelList: [
            {
                id: 1,
                name: '王先生1',
                departments: '1',
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
                status: 1,
                mobile: '15122225555',
                createTime: '2021-10-07 12:00:01',
                role: '', // 角色
                director: '7', // 主管
                jobTitle: '客服主管', // 职务
            },
            {
                id: 5,
                name: '王先生5',
                departments: '5',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
                role: '', // 角色
                director: '5', // 主管
                jobTitle: '运营主管', // 职务
            },
            {
                id: 6,
                name: '李女士6',
                departments: '2,4,7',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
                role: '', // 角色
                director: '4', // 主管
                jobTitle: '生产小兵', // 职务
            },
            {
                id: 7,
                name: '李女士7',
                departments: '3,6,9',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
                role: '', // 角色
                director: '3', // 主管
                jobTitle: '财务主管', // 职务
            },
            {
                id: 8,
                name: '李女士8',
                departments: '6,10,12',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
                role: '', // 角色
                director: '6', // 主管
                jobTitle: '销售主管', // 职务
            },
            {
                id: 9,
                name: '王先生9',
                departments: '4',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
                role: '', // 角色
                director: '', // 主管
                jobTitle: '研发小兵', // 职务
            },
            {
                id: 10,
                name: '王先生10',
                departments: '7',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
                role: '', // 角色
                director: '', // 主管
                jobTitle: '研发小兵', // 职务
            },
            {
                id: 11,
                name: '王先生11',
                departments: '3',
                status: 1,
                mobile: '15122223333',
                createTime: '2021-10-07 12:00:01',
                role: '', // 角色
                director: '', // 主管
                jobTitle: '研发小兵', // 职务
            },
        ],
        applicationList: [
            {
                id: 0,
                icon: 'InstagramOutlined',
                title: '用印申请',
                type: 1,
            },
            {
                id: 1,
                icon: 'AuditOutlined',
                title: '用章申请',
                type: 1,
            },
            {
                id: 2,
                icon: 'FieldTimeOutlined',
                title: '请假申请',
                type: 2,
            },
            {
                id: 3,
                icon: 'FieldTimeOutlined',
                title: '补卡申请',
                type: 2,
            },
            {
                id: 4,
                icon: 'CarFilled',
                title: '外出申请',
                type: 2,
            },
            {
                id: 5,
                icon: 'SendOutlined',
                title: '出差申请',
                type: 2,
            },
            {
                id: 6,
                icon: 'RobotOutlined',
                title: '加班申请',
                type: 2,
            },
            {
                id: 7,
                icon: 'TeamOutlined',
                title: '团建补卡',
                type: 2,
            },
            {
                id: 8,
                icon: 'TeamOutlined',
                title: '特殊异地打卡',
                type: 2,
            },
            {
                id: 9,
                icon: 'ContactsFilled',
                title: '转正申请',
                type: 3,
            },
            {
                id: 10,
                icon: 'UserDeleteOutlined',
                title: '离职申请',
                type: 3,
            },
            {
                id: 11,
                icon: 'PullRequestOutlined',
                title: '离职交接',
                type: 3,
            },
            {
                id: 12,
                icon: 'ProjectOutlined',
                title: '培训需求申请',
                type: 3,
            },
            {
                id: 13,
                icon: 'TransactionOutlined',
                title: '慰问金申请',
                type: 3,
            },
            {
                id: 14,
                icon: 'TrophyOutlined',
                title: '奖励申请',
                type: 3,
            },
            {
                id: 15,
                icon: 'GiftOutlined',
                title: '礼品申请',
                type: 3,
            },
            {
                id: 16,
                icon: 'TeamOutlined',
                title: '活动申请',
                type: 3,
            },
            {
                id: 17,
                icon: 'VideoCameraAddOutlined',
                title: '会议室申请',
                type: 3,
            },
            {
                id: 18,
                icon: 'MoneyCollectOutlined',
                title: '预算申报',
                type: 4,
            },
            {
                id: 19,
                icon: 'DollarOutlined',
                title: '支付申请',
                type: 4,
            },
            {
                id: 20,
                icon: 'OneToOneOutlined',
                title: '发票申请',
                type: 4,
            },
            {
                id: 21,
                icon: 'EuroCircleOutlined',
                title: '报销申请',
                type: 4,
            },
            {
                id: 22,
                icon: 'AccountBookOutlined',
                title: '借支申请',
                type: 4,
            },
            {
                id: 23,
                icon: 'ThunderboltOutlined',
                title: '扣罚工资申请',
                type: 4,
            },
            {
                id: 24,
                icon: 'TrademarkCircleOutlined',
                title: '工程款支付申请',
                type: 4,
            },
            {
                id: 25,
                icon: 'TrademarkCircleOutlined',
                title: '工程前期支付',
                type: 4,
            },
            {
                id: 26,
                icon: 'TableOutlined',
                title: '办公费用支付',
                type: 4,
            },
            {
                id: 27,
                icon: 'SolutionOutlined',
                title: '合同审批',
                type: 4,
            },
            {
                id: 28,
                icon: 'InstagramOutlined',
                title: '用印申请',
                type: 5,
            },
            {
                id: 29,
                icon: 'AuditOutlined',
                title: '用章申请',
                type: 5,
            },
            {
                id: 30,
                icon: 'AuditOutlined',
                title: '工作证明',
                type: 5,
            },
            {
                id: 31,
                icon: 'ShoppingCartOutlined',
                title: '物品申购',
                type: 5,
            },
            {
                id: 32,
                icon: 'SolutionOutlined',
                title: '名片申请',
                type: 5,
            },
            {
                id: 33,
                icon: 'SaveOutlined',
                title: '档案借阅',
                type: 5,
            },
            {
                id: 34,
                icon: 'SaveOutlined',
                title: '合同借阅',
                type: 5,
            },
            {
                id: 35,
                icon: 'SplitCellsOutlined',
                title: '档案移交申请',
                type: 5,
            },
            {
                id: 36,
                icon: 'SplitCellsOutlined',
                title: '文件传阅申请',
                type: 5,
            },
            {
                id: 37,
                icon: 'CarOutlined',
                title: '用车申请',
                type: 5,
            },
        ],
        applicationType: [
            {
                value: 0,
                label: '调休',
            },
            {
                value: 1,
                label: '年假',
            },
            {
                value: 2,
                label: '事假',
            },
            {
                value: 3,
                label: '病假',
            },
            {
                value: 4,
                label: '婚假',
            },
            {
                value: 5,
                label: '产假',
            },
            {
                value: 6,
                label: '陪产假',
            },
            {
                value: 7,
                label: '丧假',
            },
        ],
        taskList: [
            {
                id: 0,
                applicationType: 1, // 请假类型 --- 年假
                applicationId: 2, // 流程节点类型 --- 请假申请
                userName: '李女士6',
                userId: 6,
                createTime: '2021-10-10',
                taskEndTime: '',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休0天', // 事由
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 0, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: 1, // 审批节点指针
                process: [
                    {
                        dep: '', // 部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '这里是被抄送人', // 反馈
                        ccUserId: '1', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '2', // 上级部门
                        directorId: 2, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '1', // 上级部门
                        directorId: 1, // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见二', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
            },
            {
                id: 1,
                applicationType: 1, // 请假类型 --- 年假
                applicationId: 2, // 流程节点类型 --- 请假申请
                userName: '李女士6',
                userId: 6,
                createTime: '2021-10-10',
                taskEndTime: '2021-10-12',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休0天 撤销',
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 1, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: -1, // 审批节点指针
                process: [
                    {
                        dep: '', // 部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '这里是被抄送人', // 反馈
                        ccUserId: '1', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '2', // 上级部门
                        directorId: 2, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '1', // 上级部门
                        directorId: 1, // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见二', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
            },
            {
                id: 2,
                applicationType: 1, // 请假类型 --- 年假
                applicationId: 2, // 流程节点类型 --- 请假申请
                userName: '李女士6',
                userId: 6,
                createTime: '2021-10-10',
                taskEndTime: '2021-10-13',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休0天 审核未通过',
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 2, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: -1, // 审批节点指针
                process: [
                    {
                        dep: '', // 部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '这里是被抄送人', // 反馈
                        ccUserId: '1', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '2', // 上级部门
                        directorId: 2, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '1', // 上级部门
                        directorId: 1, // 主管id
                        status: 0, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见二', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
            },
            {
                id: 3,
                applicationType: 1, // 请假类型 --- 年假
                applicationId: 2, // 流程节点类型 --- 请假申请
                userName: '李女士6',
                userId: 6,
                createTime: '2021-10-10',
                taskEndTime: '2021-10-14',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休0天 审核未通过',
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 3, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: -1, // 审批节点指针
                process: [
                    {
                        dep: '', // 部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '这里是被抄送人', // 反馈
                        ccUserId: '1', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '2', // 上级部门
                        directorId: 2, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '1', // 上级部门
                        directorId: 1, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见二', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
            },
            {
                id: 4,
                applicationType: 1,
                applicationId: 2,
                userName: '王先生11',
                userId: 11,
                createTime: '2021-10-10',
                taskEndTime: '2021-10-10',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休1天',
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 3, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: -1, // 审批节点指针
                process: [
                    {
                        dep: '3', // 上级部门
                        directorId: 7, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '李女士反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '2', // 上级部门
                        directorId: 2, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '上级反馈意见二', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '1', // 上级部门
                        directorId: 1, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '上级反馈意见三', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '', // 发起部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: 'cc人内容说明', // 反馈
                        ccUserId: '3', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
            },
            {
                id: 5,
                applicationType: 1,
                applicationId: 2,
                userName: '王先生10',
                userId: 10,
                createTime: '2021-10-10',
                taskEndTime: '2021-10-11',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休2天',
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 1, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: -1, // 审批节点指针
                process: [
                    {
                        dep: '7', // 上级部门
                        directorId: 4, // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '王先生4反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '', // 发起部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: 'cc人内容说明', // 反馈
                        ccUserId: '6', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
            },
            {
                id: 6,
                applicationType: 1,
                applicationId: 2,
                userName: '王先生5',
                userId: 5,
                createTime: '2021-10-10',
                taskEndTime: '2021-10-12',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休3天',
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 2, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: -1, // 审批节点指针
                process: [
                    {
                        dep: '1', // 上级部门
                        directorId: 1, // 主管id
                        status: 0, // 审核状态 0驳回 ， 1通过
                        desc: '王先生1反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '', // 发起部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: 'cc人内容说明', // 反馈
                        ccUserId: '3', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
            },
            {
                id: 7,
                applicationType: 1, // 请假类型 --- 年假
                applicationId: 2, // 流程节点类型 --- 请假申请
                userName: '王先生9',
                userId: 9,
                createTime: '2021-10-10',
                taskEndTime: '',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休0天',
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 0, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: 1, // 审批节点指针
                process: [
                    {
                        dep: '', // 部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '这里是被抄送人', // 反馈
                        ccUserId: '1', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '4', // 上级部门
                        directorId: 6, // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '2', // 上级部门
                        directorId: 2, // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '1', // 上级部门
                        directorId: 1, // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见二', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
            },
            {
                id: 8,
                applicationType: 1, // 请假类型 --- 年假
                applicationId: 2, // 流程节点类型 --- 请假申请
                userName: '王先生9',
                userId: 9,
                createTime: '2021-10-10',
                taskEndTime: '',
                startTime: '2021-10-15',
                endTime: '2021-10-17',
                cause: '调休0天 审批完成', // 事由
                evidence: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
                status: 3, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
                statusStep: -1, // 审批节点指针
                process: [
                    {
                        dep: '', // 部门
                        directorId: '', // 主管id
                        status: '', // 审核状态 0驳回 ， 1通过
                        desc: '这里是被抄送人', // 反馈
                        ccUserId: '1', // 被抄送人id
                        userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '4', // 上级部门
                        directorId: 6, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '2', // 上级部门
                        directorId: 2, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见一', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                    {
                        dep: '1', // 上级部门
                        directorId: 1, // 主管id
                        status: 1, // 审核状态 0驳回 ， 1通过
                        desc: '反馈意见二', // 反馈
                        ccUserId: '', // 被抄送人id
                        userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                    },
                ],
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

        // 添加流程
        async setTaskList(params, { Common = {} }) {
            const { taskList } = Common;
            const newTaskList = [...taskList];
            newTaskList.unshift(params);
            this.setStateInfo({ taskList: newTaskList });
        },
        async updateTaskList(params = {}, { Common = {} }) {
            const { taskList } = Common;
            const newTaskList = [...taskList];
            const newList = newTaskList.map(item => {
                let newItem = item;
                if (item.id === params.id) {
                    newItem = { ...item, ...params };
                }
                return newItem;
            });
            this.setStateInfo({ taskList: newList });
        },
    }),
};
