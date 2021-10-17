import React from 'react';
import PropType from 'prop-types';
import { Row, Col, Carousel, Alert, Badge, List, Tag, Progress } from 'antd';
import { connect } from 'react-redux';
import {
    SoundOutlined,
    AmazonOutlined,
    AppstoreFilled,
    DatabaseFilled,
    ProjectFilled,
} from '@ant-design/icons';
import CalendarCom from '../../components/calendarCom/index';
import TaskCom from '../../components/taskCom/index';
import './index.less';

class Home extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.initData();
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    render() {
        const data = [
            '请假申请',
            '请假申请',
            '请假申请',
            '请假申请',
            '请假申请',
            '请假申请',
            '请假申请',
        ];
        return (
            <div className="homeStyle">
                <div className="banner_box">
                    <Row>
                        <Col span={16}>
                            <Carousel dotPosition="bottom" autoplay>
                                <div>
                                    <h3 className="contentStyle">1</h3>
                                </div>
                                <div>
                                    <h3 className="contentStyle">2</h3>
                                </div>
                                <div>
                                    <h3 className="contentStyle">3</h3>
                                </div>
                                <div>
                                    <h3 className="contentStyle">4</h3>
                                </div>
                            </Carousel>
                        </Col>
                        <Col span={8} className="sound_box">
                            <div className="sound_box_title">
                                <SoundOutlined className="sound_icon common_color" />
                                公告
                            </div>
                            <div className="sound_box_content">
                                <div className="sound_box_content_box">
                                    <div className="sound_box_content_header">
                                        <span>考勤与休假管理制度</span>
                                        <span className="sound_box_content_desc">2021.10.12</span>
                                    </div>
                                    <div className="sound_box_content_desc">
                                        为维护公司正常的工作秩序，增强员工的劳动
                                    </div>
                                </div>
                                <div className="sound_box_content_box">
                                    <div className="sound_box_content_header">
                                        <span>考勤与休假管理制度</span>
                                        <span className="sound_box_content_desc">2021.10.12</span>
                                    </div>
                                    <div className="sound_box_content_desc">
                                        为维护公司正常的工作秩序，增强员工的劳动
                                    </div>
                                </div>
                                <div className="sound_box_content_box">
                                    <div className="sound_box_content_header">
                                        <span>考勤与休假管理制度</span>
                                        <span className="sound_box_content_desc">2021.10.12</span>
                                    </div>
                                    <div className="sound_box_content_desc">
                                        为维护公司正常的工作秩序，增强员工的劳动
                                    </div>
                                </div>
                                <div className="sound_box_content_box">
                                    <div className="sound_box_content_header">
                                        <span>考勤与休假管理制度</span>
                                        <span className="sound_box_content_desc">2021.10.12</span>
                                    </div>
                                    <div className="sound_box_content_desc">
                                        为维护公司正常的工作秩序，增强员工的劳动
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="home_content_option1">
                    <div className="home_content_option1_title">
                        <AppstoreFilled className="home_content_option1_title_icon" />
                        应用
                    </div>
                    <div>
                        <Row gutter={10}>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="icon_list">
                                    <div className="icon_list_item common_bg_color">
                                        <AmazonOutlined />
                                    </div>
                                    <div>工作报告</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="home_right">
                    <CalendarCom />
                </div>
                <div className="home_left">
                    <div className="home_content_option2">
                        <div className="home_content_option2_title">
                            <DatabaseFilled className="home_content_option1_title_icon" />
                            代办 <Badge count={25} />
                        </div>
                        <div className="home_content_option2_list">
                            <List
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Tag color="#108ee9">[请假]</Tag>
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <Row className="option_3" gutter={20}>
                    <Col className="option_3_item" span={12}>
                        <div className="option_3_item1_title">
                            <ProjectFilled className="home_content_option1_title_icon" />
                            项目一
                        </div>
                        <div className="option_3_item1_content">
                            <div className="option_3_item1_content_left">
                                <div className="option_3_item1_content_left_title">进度：</div>
                                <Progress percent={50} status="active" />
                                <div>
                                    <div className="option_3_item1_content_right_title">任务：</div>
                                    <TaskCom current={1} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="option_3_item" span={12}>
                        <div className="option_3_item1_title">
                            <ProjectFilled className="home_content_option1_title_icon" />
                            项目二
                        </div>
                        <div className="option_3_item1_content">
                            <div className="option_3_item1_content_left">
                                <div className="option_3_item1_content_left_title">进度：</div>
                                <Progress percent={50} status="active" />
                                <div>
                                    <div className="option_3_item1_content_right_title">任务：</div>
                                    <TaskCom current={3} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {};
};
const mapState = () => {
    return {};
};
export default connect(mapState, mapDispatch)(Home);
