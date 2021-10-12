import { asyncComponent } from './asyncComponent';
// import Home from '../app/home/index';
const Home = asyncComponent(() => import('../app/home/index'));
const Login = asyncComponent(() => import('../app/login/index'));
const Department = asyncComponent(() => import('../app/department/index'));
const Staff = asyncComponent(() => import('../app/staff/index'));
const Task = asyncComponent(() => import('../app/task/index'));
const Process = asyncComponent(() => import('../app/process/index'));
const ProcessSetting = asyncComponent(() => import('../app/process/setting'));
const TaskDetail = asyncComponent(() => import('../app/task/detail'));
const Project = asyncComponent(() => import('../app/project/index'));

export const appRouters = [
    {
        exact: true,
        path: '/',
        title: '首页',
        isNotShow: true,
        component: Home,
    },
    {
        exact: true,
        path: '/process',
        title: '申请',
        component: Process,
    },
    {
        path: '/project',
        title: '项目',
        children: [
            {
                path: '/project/manage',
                title: '项目管理',
                component: Project,
            },
            {
                path: '/project/task',
                title: '任务管理',
                component: Task,
            },
            {
                path: '/project/taskDetail',
                isNotShow: true,
                title: '任务管理详情',
                component: TaskDetail,
            },
            {
                path: '/project/logs',
                title: '日志管理',
                component: Home,
            },
        ],
    },
    {
        path: '/report',
        title: '报告',
        component: Department,
    },
    {
        path: '/maintain',
        title: '维护',
        children: [
            {
                path: '/maintain/banner',
                title: 'banner',
                component: Home,
            },
            {
                path: '/maintain/announcement',
                title: '公告',
                component: Home,
            },
            {
                path: '/maintain/processSetting',
                title: '请假流程设置',
                component: ProcessSetting,
            },
        ],
    },
    {
        path: '/organization',
        title: '组织',
        children: [
            {
                path: '/organization/department',
                title: '部门管理',
                component: Department,
            },
            {
                path: '/organization/jobTitle',
                title: '职务管理',
                component: Home,
            },
            {
                path: '/organization/staff',
                title: '员工管理',
                component: Staff,
            },
        ],
    },
];
export const configRouters = [
    {
        path: '/login',
        title: 'login',
        component: Login,
    },
];

// 路由白名单， 不需要进行鉴权的路由
export const notHasAuthorityRouter = ['login'];
