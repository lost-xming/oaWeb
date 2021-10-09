import React from 'react';
// import { connect } from 'react-redux';
import './index.less';
import Login from '@/components/login';

const LoginCom = () => {
    return (
        <div className="login-layout">
            <div className="login-content">
                <Login />
            </div>
        </div>
    );
};

export default LoginCom;
