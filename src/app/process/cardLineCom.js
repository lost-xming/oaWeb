import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Popconfirm, Divider } from 'antd';
import { PlusCircleFilled, CaretDownFilled } from '@ant-design/icons';
import './card.less';

class AddDepartment extends React.Component {
    static propTypes = {
        onCardLineClick: PropType.func,
    };

    static defaultProps = {
        onCardLineClick: () => { },
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.initData();
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => { };

    render() {
        const { onCardLineClick } = this.props;
        const cardPopDom = <div>添加抄送/审核节点？</div>;
        return (
            <div className="card_line_box">
                    <div className="card_line_disp">
                        <Divider type="vertical" className="card_line" />
                    </div>
                    <div className="card_line_add common_color">
                        <Popconfirm
                            placement="right"
                            id="card_pop"
                            title={cardPopDom}
                            onConfirm={onCardLineClick}
                            okText="确定"
                            cancelText="取消">
                            <PlusCircleFilled className="card_line_add_icon" />
                        </Popconfirm>
                    </div>
                    <div className="card_icon_box">
                        <CaretDownFilled />
                    </div>
                </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
        setPersonnelList: dispatch.Common.setPersonnelList,
    };
};
const mapState = (state) => {
    return {
        departmentList: state.Common.departmentList,
    };
};
export default connect(mapState, mapDispatch)(AddDepartment);
