import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import * as Icon from '@ant-design/icons';
import { Tabs, Button, Divider, Image, Form, message } from 'antd';
import moment from 'moment';
import { withRouter } from 'react-router';
import { formItemLayout, setTreeDataFun } from '../../utils/index';
import FormCom from '../../components/searchCom/formCom';
import FormDisCom from '../../components/searchCom/formDisCom';
import imgbase from '../../images/image.png';
import { getUserInfo } from '../../utils/localStorageSet';
import logoImg from '../../images/login/logo.png';
import './index.less';

const { TabPane } = Tabs;
class TaskDetail extends React.Component {
    static propTypes = {
        personnelList: PropType.array,
        applicationList: PropType.array,
        defaultValue: PropType.object,
        applicationType: PropType.array,
        setTaskList: PropType.func,
        updateTaskList: PropType.func,
        history: PropType.object,
        callback: PropType.func,
    };

    static defaultProps = {
        personnelList: [],
        applicationList: [],
        defaultValue: {},
        applicationType: [],
        setTaskList: () => {},
        updateTaskList: () => {},
        callback: () => {},
        history: {},
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    onFinish = async (values) => {
        const { setTaskList, history } = this.props;
        const userInfo = getUserInfo();
        const item = {
            id: 100 + window.parseInt(Math.random() * 100),
            applicationType: values.applicationType, // 请假类型 --- 年假
            applicationId: 2, // 流程节点类型 --- 请假申请
            userName: userInfo.name,
            userId: userInfo.id,
            createTime: moment().format('YYYY-MM-DD hh:mm:ss'),
            taskEndTime: '',
            startTime: moment(values.startTime).format('YYYY-MM-DD hh:mm'),
            endTime: moment(values.endTime).format('YYYY-MM-DD hh:mm'),
            cause: values.cause,
            evidence: values.evidence || [
                'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            ],
            status: 0, // 审批状态  0审核中 1已撤销 2审核未通过 3审核通过
            statusStep: 1, // 审批节点指针
            process: [
                {
                    dep: '', // 部门
                    directorId: '', // 主管id
                    status: '', // 审核状态 0驳回 ， 1通过
                    desc: '这里是被抄送人', // 反馈
                    ccUserId: '1', // 被抄送人id
                    userType: 1, // 当前人员类型 0发起人 1被抄送人 2审核人
                },
                {
                    dep: '2', // 上级部门
                    directorId: 2, // 主管id
                    status: '', // 审核状态 0驳回 ， 1通过
                    desc: '反馈意见一', // 反馈
                    ccUserId: '', // 被抄送人id
                    userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                },
                {
                    dep: '1', // 上级部门
                    directorId: 1, // 主管id
                    status: '', // 审核状态 0驳回 ， 1通过
                    desc: '反馈意见二', // 反馈
                    ccUserId: '', // 被抄送人id
                    userType: 2, // 当前人员类型 0发起人 1被抄送人 2审核人
                },
            ],
        };
        message.success('提交成功！');
        await setTaskList(item);
        history.push('/project/task');
    };

    onAgree = async () => {
        const { defaultValue, updateTaskList, callback } = this.props;
        const process = [...defaultValue.process];
        const processLen = process.length;
        const { statusStep } = defaultValue;
        process[statusStep].status = 1;
        const newParams = {
            status: processLen >= statusStep + 1 ? 0 : 3,
            statusStep: processLen >= statusStep + 1 ? statusStep + 1 : -1,
            taskEndTime: processLen >= statusStep + 1 ? '' : moment().format('YYYY-MM-DD hh:mm:ss'),
            process,
        };
        await updateTaskList({ ...defaultValue, ...newParams });
        message.success('审批成功！');
        callback();
    };

    onTurnDown = async () => {
        const { defaultValue, updateTaskList, callback } = this.props;
        const process = [...defaultValue.process];
        const processLen = process.length;
        const { statusStep } = defaultValue;
        process[statusStep].status = 0;
        const newParams = {
            status: processLen >= statusStep + 1 ? 0 : 2,
            statusStep: -1,
            taskEndTime: processLen >= statusStep + 1 ? '' : moment().format('YYYY-MM-DD hh:mm:ss'),
            process,
        };
        await updateTaskList({ ...defaultValue, ...newParams });
        message.success('驳回成功！');
        callback();
    };

    _renderContent() {
        const { defaultValue, applicationType } = this.props;
        const userInfo = getUserInfo();
        const isDes = !!Object.keys(defaultValue).length;
        const isTagetTask = defaultValue.process
            ? defaultValue.statusStep !== -1 &&
              defaultValue.process[defaultValue.statusStep].directorId === userInfo.id
            : false;
        const formArr = [
            {
                type: 'select',
                name: 'applicationType',
                label: '请假类型',
                required: true,
                arr: applicationType,
                disabled: isDes,
            },
            {
                type: 'hsTimer',
                name: 'startTime',
                label: '开始时间',
                showTime: true,
                required: true,
                disabled: isDes,
            },
            {
                type: 'hsTimer',
                name: 'endTime',
                label: '结束时间',
                showTime: true,
                required: true,
                disabled: isDes,
            },
            {
                type: 'input',
                name: 'leaveTime',
                label: '请假时长',
                required: true,
                disabled: isDes,
            },
            {
                type: 'textArea',
                name: 'cause',
                label: '请假事由',
                required: true,
                disabled: isDes,
            },
        ];
        const formArr2 = [
            {
                type: 'file',
                name: 'evidence',
                label: '证明材料',
                arr: applicationType,
                url: '',
                extra: '添加图片（最多选择9张）',
                disabled: isDes,
            },
        ];

        return (
            <div className="task_content">
                <h3>请假申请</h3>
                <div className="task_content_gs">
                    <Image
                        width={24}
                        height={24}
                        src={logoImg}
                        className="task_title_img"
                        fallback={imgbase}
                    />
                    <span className="task_title_text">蔡甸城投智能交通</span>
                </div>
                <Divider dashed />
                <div>
                    <Divider type="vertical" className="line" /> 基本信息
                </div>
                <Form ref={this.formRef} onFinish={this.onFinish} {...formItemLayout(6, 15)}>
                    {isDes ? (
                        <FormDisCom searchArr={formArr} defaultValue={defaultValue} />
                    ) : (
                        <FormCom searchArr={formArr} defaultValue={defaultValue} />
                    )}
                    <div>
                        <Divider type="vertical" className="line" /> 备注信息
                    </div>
                    {isDes ? (
                        <FormDisCom searchArr={formArr2} defaultValue={defaultValue} />
                    ) : (
                        <FormCom searchArr={formArr2} defaultValue={defaultValue} />
                    )}
                    <Form.Item label="备注">
                        <div className="remarks">
                            <div className="remarks_text">必填信息填写后，流程将自动显示</div>
                            {isTagetTask ? (
                                <div className="form_btns">
                                    <Button
                                        type="primary"
                                        onClick={this.onAgree}
                                        className="form_btns_save">
                                        同意
                                    </Button>
                                    <Button
                                        danger
                                        onClick={this.onTurnDown}
                                        className="form_btns_save">
                                        驳回
                                    </Button>
                                </div>
                            ) : null}
                            {defaultValue.id ? null : (
                                <div className="form_btns">
                                    <Button
                                        type="primary"
                                        className="form_btns_save"
                                        htmlType="submit">
                                        发起审批
                                    </Button>
                                    <Button htmlType="reset" danger className="form_btns_save">
                                        重置
                                    </Button>
                                    <Button>保存草稿</Button>
                                </div>
                            )}
                        </div>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    render() {
        return <div className="option_page">{this._renderContent()}</div>;
    }
}

const mapDispatch = (dispatch) => {
    return {
        setTaskList: dispatch.Common.setTaskList,
        updateTaskList: dispatch.Common.updateTaskList,
    };
};
const mapState = (state) => {
    return {
        // departmentList: state.Common.departmentList,
        personnelList: state.Common.personnelList,
        applicationList: state.Common.applicationList,
        applicationType: state.Common.applicationType,
    };
};
export default connect(mapState, mapDispatch)(withRouter(TaskDetail));
