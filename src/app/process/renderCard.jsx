import React, { Fragment } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import CardCom from './cardCom';
import CardLineCom from './cardLineCom';
import CardInfoCom from './cardInfo';
import './cardPage.less';

class CardPage extends React.Component {
    static propTypes = {
        // departmentList: PropType.array,
        personnelList: PropType.array,
    };

    static defaultProps = {
        // departmentList: [],
        personnelList: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            cardActive: 0,
            list: [
                {
                    type: 0,
                    personnelTargets: [{ name: '所有人' }],
                    targetDep: [],
                    personnelValue: null,
                    directorValue: null,
                },
                {
                    type: 2,
                    personnelTargets: [
                        {
                            id: 9,
                            name: '王先生9',
                            departments: '1,5,7',
                            status: 1,
                            mobile: '15122223333',
                            createTime: '2021-10-07 12:00:01',
                        },
                    ],
                    targetDep: ['1-9'],
                    personnelValue: null,
                    directorValue: null,
                },
                {
                    type: 1,
                    personnelTargets: [
                        {
                            id: 7,
                            name: '李女士7',
                            departments: '3,6,9',
                            status: 1,
                            mobile: '15122223333',
                            createTime: '2021-10-07 12:00:01',
                        },
                    ],
                    targetDep: ['1-2-3-7'],
                    personnelValue: 0,
                    directorValue: null,
                },
                {
                    type: 1,
                    personnelTargets: [
                        {
                            id: 8,
                            name: '李女士8',
                            departments: '6,10,12',
                            status: 1,
                            mobile: '15122223333',
                            createTime: '2021-10-07 12:00:01',
                        },
                    ],
                    targetDep: ['11-12-8'],
                    personnelValue: 0,
                    directorValue: null,
                },
            ],
        };
    }

    componentDidMount() {}

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    onConfirm = (index) => {
        const { list } = this.state;
        const newList = [...list];
        newList.splice(index + 1, 0, {
            type: 1,
            personnelTargets: [
                {
                    name: '编辑人员',
                },
            ],
            targetDep: [],
            personnelValue: null,
            directorValue: null,
        });
        this.setState({ list: newList });
    };

    onCardClick = (index) => {
        this.setState({
            cardActive: index,
            visible: index !== 0,
        });
    };

    onRemoveClick = (index) => {
        const { list } = this.state;
        const newList = [...list];
        newList.splice(index, 1);
        this.setState({ list: newList, cardActive: 0, visible: false });
    };

    onDrawerClose = () => {
        this.setState({
            visible: false,
        });
    };

    onOkCallback = (values) => {
        const { list, cardActive } = this.state;
        const newList = [...list];
        newList[cardActive] = values;
        this.setState({
            list: newList,
        });
        this.onDrawerClose();
    };

    _renderDrawer() {
        const { visible, list, cardActive } = this.state;
        const cardData = list[cardActive];
        return (
            <Drawer
                width={700}
                title="节点详情"
                placement="right"
                onClose={this.onDrawerClose}
                visible={visible}>
                <CardInfoCom defaultValue={cardData} onOkCallback={this.onOkCallback} />
            </Drawer>
        );
    }

    render() {
        const { cardActive, list, visible } = this.state;
        return (
            <Fragment>
                <div className="card_page">
                    {list.map((item, index) => {
                        return (
                            <div key={`${index}_card`}>
                                <CardCom
                                    onCardClick={() => this.onCardClick(index)}
                                    acitve={index === cardActive}
                                    defaultValue={item}
                                    onRemoveClick={() => this.onRemoveClick(index)}
                                />
                                <CardLineCom
                                    acitve={index === cardActive}
                                    onCardLineClick={() => this.onConfirm(index)}
                                />
                            </div>
                        );
                    })}
                    <div className="card_end">流程结束</div>
                </div>
                {visible ? this._renderDrawer() : null}
            </Fragment>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {};
};
const mapState = (state) => {
    return {
        // departmentList: state.Common.departmentList,
        personnelList: state.Common.personnelList,
    };
};
export default connect(mapState, mapDispatch)(CardPage);
