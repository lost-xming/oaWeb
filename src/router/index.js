import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthorizedRoute from '../components/authorized/route';
import LayoutBox from '../app/layout/index';
import { asyncComponent } from './asyncComponent';
import { appRouters, configRouters } from './router';

// const Statistics = asyncComponent(() => import('../app/statistics/index'));
// const Business = asyncComponent(() => import('../app/business/index'));
const renderItem = (routerArr) => {
    return routerArr.map((r) => {
        const { path, children, redirect } = r;
        if (children && children.length) {
            return (
                <Fragment key={path}>
                    {redirect
                    && (
                        <Redirect
                            key={path}
                            from={path}
                            to={`${redirect}`}
                        />
                    )}
                    <Route
                        key={path}
                        path={`${path}`}
                        render={() => {
                            return renderItem(children);
                        }}
                    />
                </Fragment>
            );
        }
        return <AuthorizedRoute key={path} {...r} />;
    });
};

const resetRouter = () => {
    // const newRoute = [];
    // appRouters.map((item) => {
    //     if (item.path === '/business') {
    //         item.children = [
    //             {
    //                 path: `/business/:id`,
    //                 title: '业务路由单项',
    //                 iconType: 'BookOutlined',
    //                 component: Business,
    //             },
    //         ];
    //     }
    //     if (item.path === '/statistics') {
    //         item.children = [
    //             {
    //                 path: `/statistics/:id`,
    //                 title: '数据路由单项',
    //                 iconType: 'BookOutlined',
    //                 component: Statistics,
    //             },
    //         ];
    //     }
    //     newRoute.push(item);
    //     return null;
    // });
    return appRouters;
};

const renderConfigRouter = (arr) => {
    return arr.map((item) => {
        return (
            <Route path={`${item.path}`} key={item.path} component={item.component} />
        );
    });
};
const BasicRoute = () => {
    const newRouters = resetRouter();
    return (
        <Switch>
            {renderConfigRouter(configRouters)}
            <LayoutBox>{renderItem(newRouters)}</LayoutBox>
        </Switch>
    );
};
export default BasicRoute;
