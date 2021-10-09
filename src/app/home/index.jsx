import React from 'react';
import PropType from 'prop-types';
import { Row, Col, Carousel, Alert, Badge, List, Typography } from 'antd';
import { connect } from 'react-redux';
import {
    SoundOutlined,
    AmazonOutlined,
    HistoryOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';
import CalendarCom from '../../components/calendarCom/index';
import RingProgressCom from '../../components/ringProgressCom';
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
        const data = ['请假申请', '请假申请', '请假申请', '请假申请', '请假申请'];
        return (
            <div className="homeStyle">
                <div className="banner_box">
                    <Row>
                        <Col span={16}>
                            <Carousel dotPosition="right" autoplay>
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
                                <Alert
                                    className="sound_info"
                                    message="国庆放假通知"
                                    description="国庆放假通知详情国庆放假通知详情国庆放假通知详情国庆放假通知详情"
                                    type="info"
                                />
                                <Alert
                                    className="sound_info"
                                    message="国庆放假通知"
                                    description="国庆放假通知详情国庆放假通知详情国庆放假通知详情国庆放假通知详情"
                                    type="info"
                                />
                                <Alert
                                    className="sound_info"
                                    message="国庆放假通知"
                                    description="国庆放假通知详情国庆放假通知详情国庆放假通知详情国庆放假通知详情"
                                    type="info"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="home_content_box">
                    <div className="home_left">
                        <div className="home_content_option1">
                            <div className="home_content_option1_title">应用</div>
                            <div>
                                <Row gutter={10}>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div className="icon_list">
                                            <div className="icon_list_item common_bg_color">
                                                <AmazonOutlined />
                                            </div>
                                            <div>工作报告</div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
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
                        <div className="home_content_option2">
                            <div className="home_content_option2_title">
                                代办 <Badge count={25} />
                            </div>
                            <div className="home_content_option2_list">
                                <List
                                    dataSource={data}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <Typography.Text mark>[请假]</Typography.Text> {item}
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="home_right">
                        <CalendarCom />
                    </div>
                </div>
                <div className="option_3">
                    <div className="option_3_item1">
                        <div className="option_3_item1_title">项目一</div>
                        <div className="option_3_item1_content">
                            <div className="option_3_item1_content_left">
                                <div>
                                    <div className="option_3_item1_content_left_title">
                                        <HistoryOutlined className="option_3_item1_content_left_title_icon" />
                                        进度
                                    </div>
                                    <div className="option_3_item1_content_text">
                                        <RingProgressCom value={0.6} />
                                    </div>
                                </div>
                            </div>
                            <div className="option_3_item1_content_right">
                                <div>
                                    <div className="option_3_item1_content_right_title">
                                        <CheckCircleOutlined className="option_3_item1_content_right_title_icon" />
                                        任务
                                    </div>
                                    <TaskCom current={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="option_3_item1">
                        <div className="option_3_item1_title">项目二</div>
                        <div className="option_3_item1_content">
                            <div className="option_3_item1_content_left">
                                <div>
                                    <div className="option_3_item1_content_left_title">
                                        <HistoryOutlined className="option_3_item1_content_left_title_icon" />
                                        进度
                                    </div>
                                    <div className="option_3_item1_content_text">
                                        <RingProgressCom value={0.9} />
                                    </div>
                                </div>
                            </div>
                            <div className="option_3_item1_content_right">
                                <div>
                                    <div className="option_3_item1_content_right_title">
                                        <CheckCircleOutlined className="option_3_item1_content_right_title_icon" />
                                        任务
                                    </div>
                                    <TaskCom current={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
