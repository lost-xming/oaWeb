import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import * as Icon from '@ant-design/icons';
import { Tabs, Button, Divider, Image, Form, message } from 'antd';
import moment from 'moment';
import { withRouter } from 'react-router';
import { formItemLayout, colorList, setTreeDataFun } from '../../utils/index';
import FormCom from '../../components/searchCom/formCom';
// import FormDisCom from '../../components/searchCom/formDisCom';
import imgbase from '../../images/image.png';
import { getUserInfo } from '../../utils/localStorageSet';
import './index.less';

const { TabPane } = Tabs;
class TaskDetail extends React.Component {
    static propTypes = {
        personnelList: PropType.array,
        applicationList: PropType.array,
        defaultValue: PropType.object,
        applicationType: PropType.array,
        departmentList: PropType.array,
        history: PropType.object,
        callback: PropType.func,
    };

    static defaultProps = {
        personnelList: [],
        applicationList: [],
        departmentList: [],
        defaultValue: {},
        applicationType: [],
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

    getUserId = (arr) => {
        const { personnelList } = this.props;
        const newArr = arr.map((item) => {
            const strArr = item.split('-');
            const idNum = Number(strArr[strArr.length - 1]);
            const perList = personnelList.filter((it) => it.id === idNum);
            return perList[0];
        });
        return newArr;
    };

    onFinish = async (values) => {
        const { callback, defaultValue } = this.props;
        const principalArr = this.getUserId([values.principalId]);
        const member = this.getUserId(values.memberId);
        const newValues = {
            ...values,
            id: defaultValue.id > -1 ? defaultValue.id : 100 + window.parseInt(Math.random() * 100),
            progress: 0,
            status: '1',
            logo: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            updateTime: moment().format('YYYY-MM-DD hh:mm:ss'),
            startTime: moment(values.startTime).format('YYYY-MM-DD'),
            endTime: moment(values.endTime).format('YYYY-MM-DD'),
            principal: principalArr.length ? principalArr[0] : {},
            member,
        };
        callback(newValues);
    };

    resetData = (people, deps, key = null) => {
        const newData = [];
        deps.map((item) => {
            const newItem = {
                title: `${item.name}`,
                id: `${item.name}-${item.id}`,
                key: `dep-${item.id}`,
                name: `${item.name}`,
                disabled: true,
                children: [],
            };
            const childrenArr = people.filter((it) => it.departments.indexOf(item.id) > -1);
            childrenArr.map((it) => {
                newItem.children.push({
                    id: `${key ? `${key}-` : ''}${item.id}-${it.id}`,
                    name: `${it.name}`,
                    title: `${it.name} - ${key ? `${key}-` : ''}${item.id}-${it.id}`,
                    key: `${key ? `${key}-` : ''}${item.id}-${it.id}`,
                });
                return null;
            });
            // ??????
            if (item.children && Array.isArray(item.children)) {
                const depsItem = this.resetData(
                    people,
                    item.children,
                    `${key ? `${key}-` : ''}${item.id}`,
                );
                newItem.children.push(...depsItem);
            }
            newData.push(newItem);
            return null;
        });
        return newData;
    };

    _renderContent() {
        const { defaultValue, applicationType, departmentList, personnelList } = this.props;
        const userInfo = getUserInfo();
        // const isDes = !!Object.keys(defaultValue).length;
        const newTreeList = setTreeDataFun(departmentList);
        const treeData = this.resetData(personnelList, newTreeList) || [];
        const formArr = [
            {
                type: 'input',
                name: 'name',
                label: '????????????',
                required: true,
            },
            {
                type: 'timer',
                name: 'startTime',
                label: '????????????',
                showTime: true,
                required: true,
            },
            {
                type: 'timer',
                name: 'endTime',
                label: '????????????',
                showTime: true,
                required: true,
            },
            {
                type: 'treeSelect',
                name: 'principalId',
                label: '?????????',
                required: true,
                arr: treeData,
            },
            {
                type: 'treeSelectNode',
                name: 'memberId',
                label: '????????????',
                required: true,
                arr: treeData,
            },
            {
                type: 'radioColor',
                name: 'tag',
                label: '????????????',
                required: true,
                arr: colorList,
            },
            {
                type: 'radioGroup',
                name: 'visibleRange',
                label: '????????????',
                required: true,
                arr: [
                    { label: '??????????????????', value: 0 },
                    { label: '??????????????????', value: 1 },
                ],
            },
            {
                type: 'textArea',
                name: 'describe',
                label: '????????????',
                required: true,
            },
            {
                type: 'file',
                name: 'files',
                label: '????????????',
                arr: applicationType,
                url: '',
                extra: '???????????????.rar .zip .doc .docx .pdf ???????????????????????????20MB',
            },
        ];

        return (
            <div className="project_add_content">
                <Divider type="vertical" className="line" /> ????????????
                <Form ref={this.formRef} onFinish={this.onFinish} {...formItemLayout(6, 15)}>
                    <FormCom searchArr={formArr} defaultValue={defaultValue} />
                    <Form.Item label="??????">
                        <div className="remarks">
                            <div className="remarks_text">??????????????????????????????????????????????????????</div>
                            <div className="form_btns">
                                <Button type="primary" className="form_btns_save" htmlType="submit">
                                    ??????
                                </Button>
                                <Button htmlType="reset" danger className="form_btns_save">
                                    ??????
                                </Button>
                            </div>
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
        // updateTaskList: dispatch.Common.updateTaskList,
    };
};
const mapState = (state) => {
    return {
        departmentList: state.Common.departmentList,
        personnelList: state.Common.personnelList,
        applicationList: state.Common.applicationList,
        applicationType: state.Common.applicationType,
    };
};
export default connect(mapState, mapDispatch)(withRouter(TaskDetail));
