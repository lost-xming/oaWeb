import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Image, Input, Row, Col, Button, Progress, Divider, Tabs, Tag, Pagination } from 'antd';
import * as Icon from '@ant-design/icons';
import ProjectTable from '../../components/tableBox/project';
import { projectStatus } from '../../utils/index';
import AddForm from './addForm';
import './index.less';

const { TabPane } = Tabs;
class Detail extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '0',
            pageNum: 1,
            total: 3,
            pageSize: 10,
        };
    }

    componentDidMount() {
        this.initData();
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    onBtnClick = (name) => {
        console.log(name);
        switch (name) {
            case 'update':
                break;
            case 'upload':
                break;
            case 'add':
                break;
            case 'edit':
                break;
            case 'detele':
                break;
            default:
                break;
        }
    };

    onShowSizeChange = () => {};

    onPageChange = () => {};

    onTabsChange = (value) => {
        this.setState({
            activeTab: value,
        });
    };

    _renderListItem = (item, index) => {
        return (
            <Row
                key={`${index}_list_item`}
                className="item_content"
                style={{ borderLeft: `4px solid ${item.tag}` }}>
                <Col span={7}>
                    {/* <span className="item_content_icon">
                        {React.createElement(Icon.FolderOpenFilled)}
                    </span> */}
                    {item.title}
                </Col>
                <Col span={2}>
                    <Tag color="green">{item.status}</Tag>
                </Col>
                <Col span={5}>
                    {/* <span className="item_content_icon">
                        {React.createElement(Icon.BellFilled)}
                    </span> */}
                    {item.endTime}??????
                </Col>
                <Col span={2}>
                    <Tag color="#f50">{item.timerType}</Tag>
                </Col>
                <Col span={4}>
                    {/* <span className="item_content_icon">
                        {React.createElement(Icon.CodeSandboxSquareFilled)}
                    </span> */}
                    {item.name}
                </Col>
                <Col span={1}>
                    <span className="item_content_icon">
                        {React.createElement(Icon.MessageFilled)}
                    </span>
                    {item.num}
                </Col>
                <Col span={1}>
                    <span className="item_content_icon">
                        {React.createElement(Icon.PushpinFilled)}
                    </span>
                    {item.link}
                </Col>
                <Col span={2}>
                    <Image width={40} className="rand_img" src={item.userInfo.url} />
                </Col>
            </Row>
        );
    };

    _renderTabs() {
        const { activeTab } = this.state;
        const tabs = [
            {
                title: '????????????',
                key: '0',
            },
            {
                title: '????????????',
                key: '1',
            },
            {
                title: '????????????',
                key: '2',
            },
            {
                title: '????????????',
                key: '3',
            },
        ];
        return (
            <Tabs onChange={this.onTabsChange} activeKey={activeTab}>
                {tabs.map((item) => {
                    return <TabPane tab={item.title} key={`${item.key}`} />;
                })}
            </Tabs>
        );
    }

    _renderOption1() {
        const btns = [
            {
                icon: 'FileSyncOutlined',
                label: '????????????',
                name: 'update',
            },
            {
                icon: 'UploadOutlined',
                label: '????????????',
                name: 'upload',
            },
            {
                icon: 'AppstoreAddOutlined',
                label: '????????????',
                name: 'add',
            },
            {
                icon: 'FormOutlined',
                label: '????????????',
                name: 'edit',
            },
            {
                icon: 'DeleteOutlined',
                label: '????????????',
                name: 'detele',
            },
        ];
        return (
            <div className="detail_option1">
                <div className="option1_left">
                    <Image
                        width={40}
                        className="option1_left_img"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <div className="option1_left_text">
                        <div className="option1_left_h3">????????????????????????</div>
                        <div className="option1_left_desc">??????????????????????????????</div>
                    </div>
                </div>
                <Input.Group compact className="option1_right">
                    {btns.map((item, index) => {
                        return (
                            <Button
                                key={`${index}_btn`}
                                icon={React.createElement(Icon[item.icon])}
                                onClick={() => this.onBtnClick(item.name)}>
                                {item.label}
                            </Button>
                        );
                    })}
                </Input.Group>
            </div>
        );
    }

    _renderOption2() {
        return (
            <div className="detail_option2">
                <div className="option2_left">
                    <Row>
                        <Col span={4}>
                            <div className="option2_title">????????????</div>
                            <div className="option2_value">
                                <Tag color="success">?????????</Tag>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className="option2_title">????????????</div>
                            <div className="option2_value">?????????</div>
                        </Col>
                        <Col span={4}>
                            <div className="option2_title">????????????</div>
                            <div className="option2_value">??????????????????</div>
                        </Col>
                        <Col span={4}>
                            <div className="option2_title">????????????</div>
                            <div className="option2_value">2020-11-01</div>
                        </Col>
                        <Col span={4}>
                            <div className="option2_title">????????????</div>
                            <div className="option2_value">2020-11-30</div>
                        </Col>
                        <Col span={4}>
                            <div className="option2_title">????????????</div>
                            <div className="option2_value">11-25 23:26:08</div>
                        </Col>
                    </Row>
                </div>
                <div className="option2_right">
                    <div className="option2_title">????????????</div>
                    <div>
                        <Progress percent={50} trailColor="#bfbfbf" size="small" status="active" />
                    </div>
                </div>
            </div>
        );
    }

    _renderList() {
        const { pageNum, total, pageSize } = this.state;
        const listArr = [
            {
                id: 0,
                tag: '#13c2c2',
                title: '????????????',
                status: '?????????',
                endTime: '2021-10-12',
                timerType: '??????',
                name: '????????????',
                num: 2,
                link: 3,
                userInfo: {
                    id: 1,
                    name: '?????????1',
                    departments: '1',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    status: 1,
                    mobile: '15122223333',
                    createTime: '2021-10-07 12:00:01',
                    role: '', // ??????
                    director: '1', // ??????
                    jobTitle: '??????', // ??????
                },
            },
            {
                id: 1,
                tag: '#13c2c2',
                title: '????????????',
                status: '?????????',
                endTime: '2021-10-12',
                timerType: '??????',
                name: '????????????',
                num: 2,
                link: 3,
                userInfo: {
                    id: 1,
                    name: '?????????1',
                    departments: '1',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    status: 1,
                    mobile: '15122223333',
                    createTime: '2021-10-07 12:00:01',
                    role: '', // ??????
                    director: '1', // ??????
                    jobTitle: '??????', // ??????
                },
            },
            {
                id: 2,
                tag: '#13c2c2',
                title: '????????????',
                status: '?????????',
                endTime: '2021-10-12',
                timerType: '??????',
                name: '????????????',
                num: 2,
                link: 3,
                userInfo: {
                    id: 1,
                    name: '?????????1',
                    departments: '1',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    status: 1,
                    mobile: '15122223333',
                    createTime: '2021-10-07 12:00:01',
                    role: '', // ??????
                    director: '1', // ??????
                    jobTitle: '??????', // ??????
                },
            },
        ];
        const paginationPar = {
            current: pageNum,
            total,
            pageSize,
            showSizeChanger: true,
            showTotal: (totalNum) => {
                return <span>???{totalNum}???</span>;
            },
            onShowSizeChange: this.onShowSizeChange,
            onChange: this.onPageChange,
        };
        return (
            <div>
                {listArr.map((item, index) => {
                    return this._renderListItem(item, index);
                })}
                <div className="pagination_content">
                    <Pagination {...paginationPar} />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="project_detail">
                <div className="project_detail_top">
                    {this._renderOption1()}
                    {this._renderOption2()}
                </div>
                <div className="list_box">
                    {this._renderTabs()}
                    {this._renderList()}
                </div>
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
        setTaskList: dispatch.project.setTaskList,
    };
};
const mapState = (state) => {
    return {
        departmentList: state.Common.departmentList,
        personnelList: state.Common.personnelList,
        listData: state.project.listData,
    };
};
export default connect(mapState, mapDispatch)(Detail);
