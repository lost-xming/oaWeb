import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Card, Badge, Button, Switch, Input, Popconfirm, Divider } from 'antd';
import CardCom from './renderCard';
import './index.less';

class Process extends React.Component {
    static propTypes = {
        departmentList: PropType.array,
        personnelList: PropType.array,
    };

    static defaultProps = {
        departmentList: [],
        personnelList: [],
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    render() {
        return (
            <div className="process_page">
                <CardCom />
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {};
};
const mapState = (state) => {
    return {
        departmentList: state.Common.departmentList,
        personnelList: state.Common.personnelList,
    };
};
export default connect(mapState, mapDispatch)(Process);
