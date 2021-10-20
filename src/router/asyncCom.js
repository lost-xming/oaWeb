import { Spin } from 'antd';
import React, { Component } from 'react';
import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
    console.log(352);
    return <Spin />;
};

// 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = MyLoadingComponent) => {
    return Loadable({
        loader,
        loading,
    });
};
