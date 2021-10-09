import React from 'react';
import PropType from 'prop-types';
import { Progress } from 'antd';
import { RingProgress } from '@ant-design/charts';
import { connect } from 'react-redux';
import './index.less';

class CalendarCom extends React.Component {
    static propTypes = {
        value: PropType.number,
    };

    static defaultProps = {
        value: 0,
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
        const { value } = this.props;
        const config = {
            height: 100,
            width: 100,
            autoFit: false,
            percent: value,
            color: ['#0970BB', '#E8EDF3'],
            innerRadius: 0.85,
            radius: 0.98,
            statistic: {
              title: {
                style: {
                  color: '#363636',
                  fontSize: '12px',
                  lineHeight: '14px',
                },
                formatter: function formatter() {
                  return '进度';
                },
              },
            },
          };
          return <RingProgress {...config} />;
    }
}

const mapDispatch = (dispatch) => {
    return {};
};
const mapState = () => {
    return {};
};
export default connect(mapState, mapDispatch)(CalendarCom);
