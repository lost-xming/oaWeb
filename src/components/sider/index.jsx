import React from 'react';
import { Layout, Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { appRouters } from '@/router/router';
import { getStoreUserInfo } from '@/utils/index';
// import { asyncComponent } from '@/router/asyncComponent';

// const Statistics = asyncComponent(() => import('@/app/statistics/index'));
// const Business = asyncComponent(() => import('@/app/business/index'));
const { SubMenu } = Menu;
const { Sider } = Layout;
class SiderCom extends React.Component {
    static propTypes = {
        breadcrumb: PropTypes.array,
        setBreadRouter: PropTypes.func,
        addAccessLog: PropTypes.func,
        location: PropTypes.object,
        collapsed: PropTypes.bool,
    };

    static defaultProps = {
        breadcrumb: [],
        setBreadRouter: () => {},
        addAccessLog: () => {},
        location: {},
        collapsed: false,
    };

    handleOpenChange = (openKeys) => {
        const { breadcrumb } = this.props;
        let openRouterArr = [];
        // 获取两个数组之间的 不同值
        const activeRouter = openKeys.concat(breadcrumb).filter((v, i, arr) => {
            return arr.indexOf(v) === arr.lastIndexOf(v);
        });
        let hasPath = [];
        // 如果存在 则为 新展开，反之为关闭
        if (activeRouter && activeRouter.length) {
            // 判断点击的是否为 一级导航
            hasPath = appRouters.filter((item) => {
                return item.path === activeRouter[0];
            });
            if (openKeys.indexOf(activeRouter[0]) !== -1) {
                // 展开
                if (hasPath.length !== 0) {
                    // 如果为展开其他的一级导航
                    openRouterArr = activeRouter;
                } else {
                    openRouterArr = openKeys;
                }
            } else {
                // 关闭
                openRouterArr = openKeys;
            }
        }
        this.setDispatchRouter(openRouterArr);
    };

    setDispatchRouter = (newBrandArr) => {
        const { setBreadRouter } = this.props;
        // 保存选中的项 导航信息,传递给sider 作为展开项
        setBreadRouter(newBrandArr);
    };

    onMenuClick = (title, titleName) => {
        const { addAccessLog } = this.props;
        localStorage.setItem('activeSider', title);
        addAccessLog({ menuName: `${titleName ? `${titleName}-` : ''}${title}` });
    };

    resetRouter = () => {
        const userInfo = getStoreUserInfo();
        // const { parentId } = userInfo;
        // const newRoute = [];
        // const { siderRoute = [] } = window;
        // const newSiderRoute = siderRoute.filter((item) => !item.type);
        // appRouters.map((item) => {
        //     if (parentId && (item.path === '/financial' || item.path === '/channel')) {
        //         return null;
        //     }
        //     if (item.path === '/business') {
        //         let childrenRouter = [];
        //         if (siderRoute.length) {
        //             childrenRouter = siderRoute.map((it) => {
        //                 return {
        //                     path: `/business/${it.productId}`,
        //                     title: it.productName,
        //                     iconType: 'BookOutlined',
        //                     component: Business,
        //                 };
        //             });
        //         }
        //         item.children = childrenRouter;
        //     }
        //     if (item.path === '/statistics') {
        //         let childrenRouter = [];
        //         if (siderRoute.length) {
        //             childrenRouter = newSiderRoute.map((it) => {
        //                 return {
        //                     path: `/statistics/${it.productId}`,
        //                     title: it.productName,
        //                     iconType: 'BookOutlined',
        //                     component: Statistics,
        //                 };
        //             });
        //         }
        //         item.children = childrenRouter;
        //     }
        //     newRoute.push(item);
        //     return null;
        // });
        return appRouters;
    };

    _renderMenu(item, titleName) {
        const { path, title, iconType, hasNotShow } = item;
        return (
            !hasNotShow && (
                <Menu.Item key={path} icon={React.createElement(Icon[iconType])}>
                    <Link to={`${path}`} onClick={() => this.onMenuClick(title, titleName)}>
                        {title}
                    </Link>
                </Menu.Item>
            )
        );
    }

    _renderSubMenu(item, titleName) {
        const { children = [], path, title, iconType, hasNotShow } = item;
        if (hasNotShow) {
            return null;
        }
        if (children.length) {
            return (
                <SubMenu
                    key={path || 'atuo'}
                    icon={React.createElement(Icon[iconType])}
                    title={title}>
                    {children.map((menuItem) => {
                        return this._renderSubMenu(menuItem, title);
                    })}
                </SubMenu>
            );
        }
        return this._renderMenu(item, titleName);
    }

    render() {
        const { location = {}, collapsed, breadcrumb } = this.props;
        const { pathname } = location;
        const userInfo = getStoreUserInfo();
        const routerList = this.resetRouter();
        return null;
        // <Sider
        //     style={{ height: '100vh', overflowY: 'scroll' }}
        //     trigger={null}
        //     collapsible
        //     collapsed={collapsed}>
        //     <div className="sider-logo common_color">
        //         {!collapsed ? <span>{userInfo.platName || '地推拉新平台'}</span> : ''}
        //     </div>
        //     <Menu
        //         theme="dark"
        //         mode="inline"
        //         openKeys={!collapsed ? breadcrumb : []}
        //         selectedKeys={[pathname]}
        //         onOpenChange={this.handleOpenChange}>
        //         {routerList.map((rc) => {
        //             const { children } = rc;
        //             return children && children.length
        //                 ? this._renderSubMenu(rc)
        //                 : this._renderMenu(rc);
        //         })}
        //     </Menu>
        // </Sider>
    }
}

const mapState = (state = {}) => {
    return {
        collapsed: state.SiderStore.collapsed,
        breadcrumb: state.SiderStore.breadcrumb,
    };
};
const mapDispatch = (dispatch) => {
    return {
        setBreadRouter: dispatch.SiderStore.setBreadcrumbAction,
        addAccessLog: dispatch.Common.addAccessLog,
    };
};
export default connect(mapState, mapDispatch)(withRouter(SiderCom));
