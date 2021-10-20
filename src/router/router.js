import AsyncCom from './asyncCom';
// import Home from '../app/home/index';
const Home = AsyncCom(() => import('../app/home/index'));
const Login = AsyncCom(() => import('../app/login/index'));
const Department = AsyncCom(() => import('../app/department/index'));
const Staff = AsyncCom(() => import('../app/staff/index'));
const Task = AsyncCom(() => import('../app/task/index'));
// const Process = AsyncCom(() => import('../app/process/index'));
const ProcessSetting = AsyncCom(() => import('../app/process/setting'));
const TaskDetail = AsyncCom(() => import('../app/task/detail'));
const Project = AsyncCom(() => import('../app/project/index'));
const ProjectDetail = AsyncCom(() => import('../app/project/detail'));
const Schedule = AsyncCom(() => import('../app/project/schedule'));

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
        component: Task,
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
                path: '/project/manageDetail',
                title: '任务管理',
                component: ProjectDetail,
            },
            {
                path: '/project/taskDetail',
                isNotShow: true,
                title: '任务管理详情',
                component: TaskDetail,
            },
            {
                path: '/project/schedule',
                title: '日志管理',
                component: Schedule,
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
