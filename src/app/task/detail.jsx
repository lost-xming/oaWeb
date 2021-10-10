import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import * as Icon from '@ant-design/icons';
import { Tabs, Button, Divider, Image } from 'antd';
import Option1 from './option1';
import './index.less';

const { TabPane } = Tabs;
class TaskDetail extends React.Component {
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

    onTabsChange = async (k) => {
        await this.setState({
            activeTab: k,
        });
        this.initData();
    };

    _renderTabs() {
        const { activeTab } = this.state;
        const tabs = [
            {
                title: '发起审批',
                key: '0',
            },
            {
                title: '查看报表',
                key: '1',
            },
            {
                title: '查看数据',
                key: '2',
            },
        ];
        return (
            <Tabs
                onChange={this.onTabsChange}
                activeKey={activeTab}
                tabBarExtraContent={<Button>草稿箱</Button>}>
                {tabs.map((item) => {
                    return <TabPane tab={item.title} key={`${item.key}`} />;
                })}
            </Tabs>
        );
    }

    _renderContent() {
        const { activeTab } = this.state;
        switch (activeTab) {
            case '0':
                return <Option1 />;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="task_detail_page">
                {this._renderTabs()}
                {this._renderContent()}
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
export default connect(mapState, mapDispatch)(TaskDetail);
