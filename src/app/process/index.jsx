import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import * as Icon from '@ant-design/icons';
import { Tabs, Divider } from 'antd';
// import { setTreeDataFun } from './../../utils/index';
// import CardCom from './renderCard';
import './index.less';

const { TabPane } = Tabs;
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
        // departmentList: PropType.array,
        personnelList: PropType.array,
        applicationList: PropType.array,
    };

    static defaultProps = {
        // departmentList: [],
        personnelList: [],
        applicationList: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '0',
        };
    }

    componentDidMount() {}

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    onTabsChange = (k) => {
        this.setState({
            activeTab: k,
        });
    };

    _renderTabs() {
        const { activeTab } = this.state;
        return (
            <Tabs onChange={this.onTabsChange} activeKey={activeTab} type="card">
                {tabs.map((item) => {
                    return <TabPane tab={item.title} key={`${item.key}`} />;
                })}
            </Tabs>
        );
    }

    _renderItemCard(item, index) {
        const iconDom = React.createElement(Icon[item.icon]);
        return (
            <div key={`${index}_card`} className="item_card">
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

    render() {
        return (
            <div className="process_page">
                {/* {this._renderTabs()} */}
                {/* {this._renderTab1()} */}
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
    };
};
export default connect(mapState, mapDispatch)(Process);
