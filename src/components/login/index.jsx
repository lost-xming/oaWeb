import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, message, Form, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import './index.less';
import FormCom from '../searchCom/formCom';
import { formItemLayout } from '../../utils/index';
import { setLoginInfo, getLoginInfo, setUserInfo } from '../../utils/localStorageSet';

class Login extends React.Component {
    static propTypes = {
        history: PropTypes.object,
    };

    static defaultProps = {
        history: {},
    };

    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }

    componentDidMount() {
        this.initData();
    }

    initData = () => {
        // 记住密码 -- 从cookie中获取账户信息
        const loginInfo = getLoginInfo();
        this.formRef.current.setFieldsValue({
            name: loginInfo.name,
            password: loginInfo.password,
        });
        // 判断是否已经登录 ，如果已经登录 ，直接跳转
    };

    onEnterFun = () => {
        this.formRef.current.submit();
    };

    onCheckedChange = (e) => {
        this.setState({
            checked: e.target.checked,
        });
    };

    onFinish = (values) => {
        const { checked } = this.state;
        const { history } = this.props;
        if (checked) {
            setLoginInfo(values);
        }
        setUserInfo(values);
        history.push('/');
    };

    render() {
        const { checked } = this.state;
        const formArr = [
            {
                type: 'input',
                name: 'name',
                label: '账户',
                placeholder: '请输入账户...',
                required: true,
                className: 'name_style',
                onEnter: this.onEnterFun,
                maxLength: 10,
            },
            {
                type: 'password',
                name: 'password',
                label: '密码',
                inpuType: 'password',
                placeholder: '请输入密码...',
                required: true,
                className: 'name_style',
                onEnter: this.onEnterFun,
                maxLength: 10,
            },
        ];
        return (
            <div className="loagin_com_box">
                <div className="login_title">
                    <span>欢迎登录</span> <span className="common_color">蔡甸城投智能交通</span>
                </div>
                <Form ref={this.formRef} onFinish={this.onFinish} {...formItemLayout(6, 14)}>
                    <FormCom searchArr={formArr} />
                    <div className="set_possword">
                        <Checkbox checked={checked} onChange={this.onCheckedChange}>
                            记住密码
                        </Checkbox>
                        <div className="forget common_color">忘记密码？</div>
                    </div>
                    <Button type="primary" size="large" htmlType="submit" block>
                        登 录
                    </Button>
                </Form>
            </div>
        );
    }
}
const mapState = (state = {}) => ({});
const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(withRouter(Login));
