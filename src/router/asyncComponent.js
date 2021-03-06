import React, { Component } from 'react';
import { Spin } from 'antd';

export const asyncComponent = (fn) => {
    // return 一个组件
    return class MyComponent extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                C: null,
            };
        }

        // 调用组件时会渲染当渲染完成后会执行componentDidMount这时候会调用fn
        componentDidMount() {
            console.log(888);
            // fn是一个异步的promise调用这时给组件进行复制重新渲染
            fn().then(module => {
                this.setState({
                    C: module.default,
                    // module.default就是页面引进的真正要加载的组件
                });
            });
        }

        componentWillUnmount() {
            this.setState = () => {};
        }

        render() {
            const { C, loading } = this.state;
            return (
                // <Spin spinning={loading}>
                    <div>
                        {C ? <C {...this.props} /> : null}
                    </div>
                // </Spin>
            );
        }
    };
};
