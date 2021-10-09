import React from 'react';
import PropType from 'prop-types';
import { Steps } from 'antd';
import { connect } from 'react-redux';
import './index.less';

const { Step } = Steps;
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
            <Steps progressDot current={current} direction="vertical">
                <Step title="手续提交" description="距离截止还有10天" />
                <Step title="手续提交" description="距离截止还有9天" />
                <Step title="手续提交" description="距离截止还有6天" />
                <Step title="手续提交" description="距离截止还有3天" />
                <Step title="手续提交" description="距离截止还有1天" />
            </Steps>
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
