import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Statistic, Input, Row, Col, Button, Drawer, message } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import ProjectTable from '../../components/tableBox/project';
import { projectStatus } from '../../utils/index';
import AddForm from './addForm';
import './index.less';

class Project extends React.Component {
    static propTypes = {
        departmentList: PropType.array,
        personnelList: PropType.array,
        listData: PropType.array,
        setTaskList: PropType.func,
    };

    static defaultProps = {
        departmentList: [],
        personnelList: [],
        listData: [],
        setTaskList: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            statusTab: '0',
            pageNum: 1,
            total: 0,
            tableData: [],
            inProgressArr: 0,
            completedArr: 0,
            postponedArr: 0,
            cancelledArr: 0,
            defaultValue: {},
        };
    }

    componentDidMount() {
        this.initData();
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {
        const { listData } = this.props;
        const { statusTab } = this.state;
        let newListData = [];
        // 分类条数 统计
        const inProgressArr = listData.filter((item) => item.status === '1');
        const completedArr = listData.filter((item) => item.status === '2');
        const postponedArr = listData.filter((item) => item.status === '3');
        const cancelledArr = listData.filter((item) => item.status === '4');
        switch (statusTab) {
            case '0':
                newListData = listData;
                break;
            case '1':
                newListData = inProgressArr;
                break;
            case '2':
                newListData = completedArr;
                break;
            case '3':
                newListData = postponedArr;
                break;
            case '4':
                newListData = cancelledArr;
                break;
            default:
                break;
        }

        this.setState({
            tableData: newListData,
            inProgressArr,
            completedArr,
            postponedArr,
            cancelledArr,
        });
    };

    onDrawerClose = () => {
        this.setState({
            visible: false,
        });
    };

    onAddNew = () => {
        this.setState({
            visible: true,
        });
    };

    onEditCallback = (row) => {
        this.setState({
            visible: true,
            defaultValue: row,
        });
    };

    onAddCallback = async (values) => {
        const { setTaskList } = this.props;
        await setTaskList(values);
        message.success('新增项目成功！');
        this.initData();
        this.onDrawerClose();
    };

    onStatusClick = async (id) => {
        await this.setState({
            statusTab: id,
        });
        this.initData();
    };

    _renderStatistic() {
        const { inProgressArr, completedArr, postponedArr, cancelledArr } = this.state;
        const { listData } = this.props;
        return (
            <div className="project_statistic">
                <Row gutter={20}>
                    <Col span={5}>
                        <Statistic title="项目总数" value={listData.length} />
                    </Col>
                    <Col span={5}>
                        <Statistic title="进行中" value={inProgressArr.length} />
                    </Col>
                    <Col span={5}>
                        <Statistic title="已完成" value={completedArr.length} />
                    </Col>
                    <Col span={5}>
                        <Statistic title="已延期" value={postponedArr.length} />
                    </Col>
                    <Col span={4}>
                        <Statistic title="已取消" value={cancelledArr.length} />
                    </Col>
                </Row>
            </div>
        );
    }

    _renderAdd() {
        const { visible, defaultValue } = this.state;
        return (
            <Drawer
                width={700}
                title="新建项目"
                placement="right"
                onClose={this.onDrawerClose}
                maskClosable={false}
                visible={visible}>
                <AddForm callback={this.onAddCallback} defaultValue={defaultValue} />
            </Drawer>
        );
    }

    _renderBtns() {
        const { statusTab } = this.state;
        const statusArr = [
            {
                label: '全部项目',
                value: '0',
            },
            ...projectStatus,
        ];
        return (
            <div className="btns_box">
                <Input.Group compact>
                    {statusArr.map((item, index) => {
                        return (
                            <Button
                                key={`${index}_btn`}
                                onClick={() => this.onStatusClick(item.value)}
                                type={statusTab === item.value ? 'primary' : 'default'}>
                                {item.label}
                            </Button>
                        );
                    })}
                </Input.Group>
                <Button type="primary" onClick={this.onAddNew} icon={<PlusOutlined />}>
                    创建项目
                </Button>
            </div>
        );
    }

    render() {
        const { pageNum, total, tableData, visible } = this.state;
        return (
            <div className="project_page">
                {this._renderStatistic()}
                {this._renderBtns()}
                <ProjectTable
                    pageNum={pageNum}
                    total={total}
                    tableData={tableData}
                    onEditCallback={this.onEditCallback}
                />
                {visible ? this._renderAdd() : null}
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
        setTaskList: dispatch.project.setTaskList,
    };
};
const mapState = (state) => {
    return {
        departmentList: state.Common.departmentList,
        personnelList: state.Common.personnelList,
        listData: state.project.listData,
    };
};
export default connect(mapState, mapDispatch)(Project);
