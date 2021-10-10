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
        switch (values.name) {
            case '1':
                // 李女士6
                setUserInfo({
                    createTime: '2021-10-07 12:00:01',
                    departments: '2,4,7',
                    director: '',
                    id: 6,
                    jobTitle: '生产小兵',
                    mobile: '15122223333',
                    name: '李女士6',
                    status: 1,
                });
                break;
            case '2':
                // 王先生2
                setUserInfo({
                    createTime: '2021-10-07 12:00:01',
                    departments: '2,3,4',
                    director: '',
                    id: 2,
                    jobTitle: '设计主管',
                    mobile: '15122225555',
                    name: '王先生2',
                    status: 1,
                });
                break;
            case '3':
                // 王先生1
                setUserInfo({
                    createTime: '2021-10-07 12:00:01',
                    departments: '1,2,3',
                    director: '',
                    id: 6,
                    jobTitle: '总裁',
                    mobile: '15122223333',
                    name: '王先生1',
                    status: 1,
                });
                break;
            default:
                break;
        }
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
