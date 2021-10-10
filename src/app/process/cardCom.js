import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { CloseCircleOutlined } from '@ant-design/icons';
import { directorArr } from '../../utils/index';
import './card.less';

const cardType = ['发起人', '审核人', '抄送人'];
class AddDepartment extends React.Component {
    static propTypes = {
        defaultValue: PropType.object,
        onCardClick: PropType.func,
        acitve: PropType.bool,
        onRemoveClick: PropType.func,
    };

    static defaultProps = {
        defaultValue: {},
        onCardClick: () => { },
        onRemoveClick: () => { },
        acitve: false,
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

    initData = async () => { };

    render() {
        const { defaultValue, onCardClick, acitve, onRemoveClick } = this.props;
        const userNames = (defaultValue.directorValue || defaultValue.directorValue === 0)
            ? directorArr[defaultValue.directorValue].label :
            defaultValue.personnelTargets.map(item => item.name).join(',');
        const removeClass = !(!acitve || defaultValue.type === 0)
            ? 'card_remove' : 'display_card_remove card_remove';
        return (
            <div className={acitve ? 'card_box card_active_box' : 'card_box'}>
                <div onClick={onCardClick}>
                    <div className={`card_title card_title_option${defaultValue.type}`}>{cardType[defaultValue.type]}</div>
                    <div className="card_content">{userNames}</div>
                </div>
                {defaultValue.type === 0 ? null : (
                    <div
                        className={removeClass}
                        onClick={onRemoveClick}
                    >
                        <CloseCircleOutlined />
                    </div>
                )}
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
        // departmentList: state.Common.departmentList,
    };
};
export default connect(mapState, mapDispatch)(AddDepartment);
