import { Spin } from 'antd';
import React, { Component } from 'react';
import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            className="loading_box"
        >
            <Spin />
        </div>
    );
};

// 过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = MyLoadingComponent) => {
    return Loadable({
        loader,
        loading,
    });
};
