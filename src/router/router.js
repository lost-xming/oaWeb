import { asyncComponent } from './asyncComponent';
// import Home from '../app/home/index';
const Home = asyncComponent(() => import('../app/home/index'));
const Login = asyncComponent(() => import('../app/login/index'));
const Department = asyncComponent(() => import('../app/department/index'));
const Staff = asyncComponent(() => import('../app/staff/index'));
const Task = asyncComponent(() => import('../app/task/index'));
const TaskDetail = asyncComponent(() => import('../app/task/detail'));

export const appRouters = [
    {
        exact: true,
        path: '/',
        title: '申请',
        // hasNotShow: true,
        component: Home,
    },
    {
        path: '/project',
        title: '项目',
        children: [
            {
                path: '/project/manage',
                title: '项目管理',
                component: Home,
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
                path: '/maintain/process',
                title: '流程设计',
                component: Task,
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
