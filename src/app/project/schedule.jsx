import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Image, Input, Row, Col, Button, Calendar, Checkbox, Tabs, Tag, Pagination } from 'antd';
import * as Icon from '@ant-design/icons';
import './index.less';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
class Schedule extends React.Component {
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

    onShowSizeChange = () => {};

    onPageChange = () => {};

    onPanelChange = () => {};

    onBtnClick = (name) => {
        this.setState({
            activeTab: name,
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
                <Col span={4}>
                    {/* <span className="item_content_icon">
                        {React.createElement(Icon.BellFilled)}
                    </span> */}
                    {item.endTime}截止
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
                <Col span={2} className="rand_img_box">
                    <Image width={40} className="rand_img" src={item.userInfo.url} />
                </Col>
            </Row>
        );
    };

    _renderList() {
        const { pageNum, total, pageSize } = this.state;
        const listArr = [
            {
                id: 0,
                tag: '#13c2c2',
                title: '日志标题',
                status: '进行中',
                endTime: '2021-10-12',
                timerType: '紧急',
                name: '日志名称',
                num: 2,
                link: 3,
                userInfo: {
                    id: 1,
                    name: '王先生1',
                    departments: '1',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    status: 1,
                    mobile: '15122223333',
                    createTime: '2021-10-07 12:00:01',
                    role: '', // 角色
                    director: '1', // 主管
                    jobTitle: '总裁', // 职务
                },
            },
            {
                id: 1,
                tag: '#13c2c2',
                title: '日志标题',
                status: '进行中',
                endTime: '2021-10-12',
                timerType: '紧急',
                name: '日志名称',
                num: 2,
                link: 3,
                userInfo: {
                    id: 1,
                    name: '王先生1',
                    departments: '1',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    status: 1,
                    mobile: '15122223333',
                    createTime: '2021-10-07 12:00:01',
                    role: '', // 角色
                    director: '1', // 主管
                    jobTitle: '总裁', // 职务
                },
            },
            {
                id: 2,
                tag: '#13c2c2',
                title: '日志标题',
                status: '进行中',
                endTime: '2021-10-12',
                timerType: '紧急',
                name: '日志名称',
                num: 2,
                link: 3,
                userInfo: {
                    id: 1,
                    name: '王先生1',
                    departments: '1',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                    status: 1,
                    mobile: '15122223333',
                    createTime: '2021-10-07 12:00:01',
                    role: '', // 角色
                    director: '1', // 主管
                    jobTitle: '总裁', // 职务
                },
            },
        ];
        const paginationPar = {
            current: pageNum,
            total,
            pageSize,
            showSizeChanger: true,
            showTotal: (totalNum) => {
                return <span>共{totalNum}条</span>;
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
        const { activeTab } = this.state;
        const btns = [
            {
                icon: 'PlusOutlined',
                label: '新建日程',
                name: 'update',
            },
            {
                label: '日',
                name: 'upload',
            },
            {
                label: '周',
                name: 'add',
                type: '',
            },
            {
                label: '月',
                name: 'edit',
            },
            {
                label: '今天',
                name: 'detele',
            },
        ];
        return (
            <div className="schedule_detail">
                <div className="card_left">
                    <div className="schedule_title">日程管理</div>
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                    <div className="schedule_title">成员日历</div>
                    <CheckboxGroup className="schedule_member">
                        <div className="schedule_member_checkbox">
                            <Checkbox value="A">
                                <div className="checkbox_item">
                                    <Image
                                        preview={false}
                                        className="schedule_member_checkbox_img"
                                        width={40}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                    王先生5
                                </div>
                            </Checkbox>
                        </div>
                        <div className="schedule_member_checkbox">
                            <Checkbox value="V">
                                <div className="checkbox_item">
                                    <Image
                                        preview={false}
                                        className="schedule_member_checkbox_img"
                                        width={40}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                    王先生5
                                </div>
                            </Checkbox>
                        </div>
                        <div className="schedule_member_checkbox">
                            <Checkbox value="D">
                                <div className="checkbox_item">
                                    <Image
                                        preview={false}
                                        className="schedule_member_checkbox_img"
                                        width={40}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                    王先生5
                                </div>
                            </Checkbox>
                        </div>
                        <div className="schedule_member_checkbox">
                            <Checkbox value="E">
                                <div className="checkbox_item">
                                    <Image
                                        preview={false}
                                        className="schedule_member_checkbox_img"
                                        width={40}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                    王先生5
                                </div>
                            </Checkbox>
                        </div>
                        <div className="schedule_member_checkbox">
                            <Checkbox value="F">
                                <div className="checkbox_item">
                                    <Image
                                        preview={false}
                                        className="schedule_member_checkbox_img"
                                        width={40}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                    王先生5
                                </div>
                            </Checkbox>
                        </div>
                    </CheckboxGroup>
                </div>
                <div className="list_box">
                    <div className="list_box_btns">
                        <Input.Group compact className="option1_right">
                            {btns.map((item, index) => {
                                return (
                                    <Button
                                        key={`${index}_btn`}
                                        icon={
                                            item.icon ? React.createElement(Icon[item.icon]) : null
                                        }
                                        type={activeTab === item.name ? 'primary' : 'default'}
                                        onClick={() => this.onBtnClick(item.name)}>
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </Input.Group>
                    </div>
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
export default connect(mapState, mapDispatch)(Schedule);
