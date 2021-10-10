import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import * as Icon from '@ant-design/icons';
import { Tabs, Divider, Input, Select, Button } from 'antd';
import moment from 'moment';
import SearchCom from './searchCom';
import TaskTable from '../../components/tableBox/task';
import { getUserInfo } from '../../utils/localStorageSet';
import './index.less';

const { TabPane } = Tabs;
const { Option } = Select;
const tabs = [
    {
        title: '全部',
        key: '0',
    },
    {
        title: '待处理',
        key: '1',
    },
    {
        title: '已处理',
        key: '2',
    },
    {
        title: '已发起',
        key: '3',
    },
    {
        title: '我收到',
        key: '4',
    },
];
class Process extends React.Component {
    static propTypes = {
        personnelList: PropType.array,
        applicationList: PropType.array,
        taskList: PropType.array,
        history: PropType.object,
    };

    static defaultProps = {
        personnelList: [],
        applicationList: [],
        taskList: [],
        history: {},
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '0',
            typeValue: undefined,
            tableData: [],
            searchValue: {},
            statusTab: -1,
            tableLoading: false,
            total: 0,
            pageNum: 1,
        };
    }

    componentDidMount() {
        const { taskList } = this.props;
        console.log(34353, taskList);
        this.setState({
            tableData: taskList,
        });
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {
        const { typeValue, activeTab, statusTab, searchValue } = this.state;
        const { taskList } = this.props;
        const newTask = [...taskList];
        let newData = [];
        const userInfo = getUserInfo();
        // 进行 activeTab 过滤
        newData = newTask.filter((item) => {
            let targetArr = [];
            switch (activeTab) {
                case '1':
                    // 待处理
                    return (
                        item.statusStep !== -1 &&
                        item.process[item.statusStep].directorId === userInfo.id
                    );
                case '2':
                    // 已处理
                    targetArr = item.process.filter(
                        (it) => it.directorId === userInfo.id && it.status !== '',
                    );
                    return !!(targetArr && targetArr.length);
                case '3':
                    // 已发起
                    return item.userId === userInfo.id;
                case '4':
                    // 我收到
                    targetArr = item.process.filter(
                        (it) => it.userType === 1 && it.ccUserId.indexOf(userInfo.id) > -1,
                    );
                    return !!(targetArr && targetArr.length);
                default:
                    return false;
            }
        });
        // 过滤 类型
        newData = typeValue ? newData.filter((item) => item.applicationId === typeValue) : newData;
        // 过滤 审核状态
        if (statusTab === 0 || statusTab === 1) {
            newData = newData.filter((item) => item.status === statusTab);
        } else if (statusTab === 2) {
            newData = newData.filter((item) => item.status === 2 || item.status === 3);
        }

        // 过滤  提交审批时间 submitTime
        if (searchValue.submitTime && searchValue.submitTime.length) {
            newData = newData.filter((item) => {
                return (
                    moment(item.submitTime).diff(moment(searchValue.submitTime[0]), 'days') >= 0 &&
                    moment(item.submitTime).diff(moment(searchValue.submitTime[1]), 'days') <= 0
                );
            });
        }

        if (searchValue.completionTime && searchValue.completionTime.length) {
            newData = newData.filter((item) => {
                return (
                    moment(item.taskEndTime).diff(moment(searchValue.completionTime[0]), 'days') >=
                        0 &&
                    moment(item.taskEndTime).diff(moment(searchValue.completionTime[1]), 'days') <=
                        0
                );
            });
        }
        if (searchValue.initiator) {
            newData = newData.filter((item) => item.userName.indexOf(searchValue.initiator) > -1);
        }
        if (searchValue.keywords) {
            newData = newData.filter((item) => {
                return (
                    item.userName.indexOf(searchValue.keywords) > -1 ||
                    item.cause.indexOf(searchValue.keywords) > -1
                );
            });
        }
        this.setState({
            tableData: newData,
        });
    };

    onTabsChange = async (k) => {
        await this.setState({
            activeTab: k,
            searchValue: {},
            typeValue: undefined,
            statusTab: -1,
        });
        this.initData();
    };

    onStatusClick = async (value) => {
        await this.setState({
            statusTab: value,
        });
        this.initData();
    };

    typeValueChange = async (value) => {
        await this.setState({
            typeValue: value,
        });
        this.initData();
    };

    onOkCallback = async (values) => {
        await this.setState({
            searchValue: values,
        });
        this.initData();
    };

    onCardClick = (item) => {
        const { history } = this.props;
        history.push(`/project/taskDetail?id=${item.id}`);
    };

    _renderTabs() {
        const { activeTab } = this.state;
        return (
            <Tabs onChange={this.onTabsChange} activeKey={activeTab}>
                {tabs.map((item) => {
                    return <TabPane tab={item.title} key={`${item.key}`} />;
                })}
            </Tabs>
        );
    }

    _renderItemCard(item, index) {
        const iconDom = React.createElement(Icon[item.icon]);
        return (
            <div key={`${index}_card`} className="item_card" onClick={() => this.onCardClick(item)}>
                <div className="item_card_left">
                    <span className="item_card_icon">{iconDom}</span>
                </div>
                {item.title}
            </div>
        );
    }

    _renderTab1() {
        const { applicationList } = this.props;
        const { activeTab } = this.state;
        if (activeTab !== '0') {
            return null;
        }
        const recentArr = applicationList.filter((item) => item.type === 1);
        const recentArr2 = applicationList.filter((item) => item.type === 2);
        const recentArr3 = applicationList.filter((item) => item.type === 3);
        const recentArr4 = applicationList.filter((item) => item.type === 4);
        const recentArr5 = applicationList.filter((item) => item.type === 5);
        return (
            <div>
                <div>
                    <div className="recent_title">最近使用</div>
                    <div className="recent_list">
                        {recentArr.map((item, index) => {
                            return this._renderItemCard(item, index);
                        })}
                    </div>
                    <Divider />
                </div>
                <div>
                    <div className="recent_title">考勤</div>
                    <div className="recent_list">
                        {recentArr2.map((item, index) => {
                            return this._renderItemCard(item, index);
                        })}
                    </div>
                    <Divider />
                </div>
                <div>
                    <div className="recent_title">人力行政</div>
                    <div className="recent_list">
                        {recentArr3.map((item, index) => {
                            return this._renderItemCard(item, index);
                        })}
                    </div>
                    <Divider />
                </div>
                <div>
                    <div className="recent_title">财务中心</div>
                    <div className="recent_list">
                        {recentArr4.map((item, index) => {
                            return this._renderItemCard(item, index);
                        })}
                    </div>
                    <Divider />
                </div>
                <div>
                    <div className="recent_title">员工自助</div>
                    <div className="recent_list">
                        {recentArr5.map((item, index) => {
                            return this._renderItemCard(item, index);
                        })}
                    </div>
                    <Divider />
                </div>
            </div>
        );
    }

    _renderSearch() {
        const { statusTab, typeValue, activeTab } = this.state;
        const { applicationList } = this.props;
        const statusArr = [
            { label: '全部', value: -1 },
            { label: '审批中', value: 0 },
            { label: '已撤销', value: 1 },
            { label: '审批完成', value: 2 },
        ];
        return (
            <div key={`${activeTab}_search`}>
                <SearchCom onOkCallback={this.onOkCallback} />
                <div className="search_option2">
                    <div className="search_option2_left">
                        <div className="search_option2_lable">类型</div>
                        <Select
                            style={{ width: 200 }}
                            value={typeValue}
                            allowClear
                            onChange={this.typeValueChange}
                            placeholder="请选择">
                            {applicationList.map((item) => {
                                return (
                                    <Option value={item.id} key={item.id}>
                                        {item.title}
                                    </Option>
                                );
                            })}
                        </Select>
                    </div>
                    {activeTab === '2' || activeTab === '3' ? (
                        <Input.Group compact>
                            {statusArr.map((item, index) => {
                                return (
                                    <Button
                                        key={`${index}_btn`}
                                        onClick={() => this.onStatusClick(item.value)}
                                        type={statusTab === item.value ? 'primary' : 'default'}>
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </Input.Group>
                    ) : null}
                </div>
            </div>
        );
    }

    _renderTab2() {
        const { activeTab, tableLoading, total, pageNum, tableData } = this.state;
        if (activeTab === '0') {
            return null;
        }
        return (
            <div>
                {this._renderSearch()}
                <div className="table_box">
                    <TaskTable
                        tableData={tableData}
                        activeTab={activeTab}
                        total={total}
                        pageNum={pageNum}
                        loading={tableLoading}
                        callback={this.initData}
                    />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="task_page">
                {this._renderTabs()}
                {this._renderTab1()}
                {this._renderTab2()}
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {};
};
const mapState = (state) => {
    return {
        // departmentList: state.Common.departmentList,
        personnelList: state.Common.personnelList,
        applicationList: state.Common.applicationList,
        taskList: state.Common.taskList,
    };
};
export default connect(mapState, mapDispatch)(Process);
