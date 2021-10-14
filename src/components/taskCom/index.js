import React from 'react';
import PropType from 'prop-types';
import { Timeline } from 'antd';
import { connect } from 'react-redux';
import './index.less';

class CalendarCom extends React.Component {
    static propTypes = {
        current: PropType.number,
    };

    static defaultProps = {
        current: 0,
    };

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
        const { current } = this.props;
          return (
            <Timeline progressDot current={current} direction="vertical">
                <Timeline.Item color="green">手续提交 距离截止还有10天</Timeline.Item>
                <Timeline.Item color="green">手续提交 距离截止还有8天</Timeline.Item>
                <Timeline.Item color="green">手续提交 距离截止还有5天</Timeline.Item>
                <Timeline.Item color="gray">手续提交 距离截止还有3天</Timeline.Item>
                <Timeline.Item color="gray">手续提交 距离截止还有1天</Timeline.Item>
            </Timeline>
);
    }
}

const mapDispatch = (dispatch) => {
    return {};
};
const mapState = () => {
    return {};
};
export default connect(mapState, mapDispatch)(CalendarCom);
