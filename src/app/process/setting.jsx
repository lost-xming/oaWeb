import React from 'react';
import { connect } from 'react-redux';
import CardCom from './renderCard';
import './index.less';

class Process extends React.Component {
    static propTypes = {};

    static defaultProps = {};

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
    return {};
};
export default connect(mapState, mapDispatch)(Process);
