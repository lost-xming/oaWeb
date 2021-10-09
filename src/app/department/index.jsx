import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Table, Badge, Button, Switch } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DepartmentSearch from '../../components/searchBox/department';
import AddModal from './addDepartment';
import './index.less';

const list = [
    { type: 'error', content: '关闭' },
    { type: 'success', content: '开启' },
];
class Department extends React.Component {
    static propTypes = {
        departmentList: PropType.array,
    };

    static defaultProps = {
        departmentList: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            expandedRows: [],
            pageNum: 1,
            total: 0,
            pageSize: 10,
            params: {},
            newList: [],
            modalVisiable: false,
        };
    }

    componentDidMount() {
        this.initData();
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    onBtnClick = (name) => {
        switch (name) {
            case 'add':
                // todo 添加
                this.setState({
                    modalVisiable: true,
                });
                break;
            case 'allClose':
                this.onAllClosed();
                break;
            default:
                break;
        }
    };

    onModalCancel = () => {
        this.setState({
            modalVisiable: false,
        });
    };

    onAllClosed = () => {
        this.setState({
            expandedRows: [],
        });
    };

    onRowExpandedClick = (rows) => {
        this.setState({
            expandedRows: rows,
        });
    };

    onShowSizeChange = async (current, pageSize) => {
        await this.setState({
            pageNum: 1,
            pageSize,
        });
    };

    onPageChange = async (page) => {
        await this.setState({
            pageNum: page,
        });
    };

    getListName = (arr = []) => {
        const names = [];
        const that = this;
        arr.map((item) => {
            names.push(item.name);
            if (item.children && Array.isArray(item.children)) {
                that.getListName(item.children);
            }
            return null;
        });
        return names;
    };

    onSearch = (params) => {
        const that = this;
        const { departmentList } = this.props;
        this.setState({
            params,
        });
        // 过滤 data值
        const newList = departmentList.filter((item) => {
            const itemNames = [];
            itemNames.push(item.name);
            if (item.children && Array.isArray(item.children)) {
                itemNames.push(...that.getListName(item.children));
            }
            return itemNames.indexOf(params.name) > -1;
        });
        this.setState({
            newList,
        });
    };

    _renderTables(columns = [], data = [], isOne = false) {
        const { expandedRows, pageNum, total, pageSize } = this.state;
        if (!data.length) {
            return null;
        }
        return (
            <Table
                className="department_table"
                columns={columns}
                expandable={{
                    expandedRowKeys: expandedRows,
                    expandedRowRender: this._renderTables(columns, data.children),
                    onExpandedRowsChange: this.onRowExpandedClick,
                }}
                rowKey={(record) => {
                    return `${record.id}`;
                }}
                dataSource={data}
                pagination={
                    isOne
                        ? {
                              current: pageNum,
                              total,
                              pageSize,
                              showSizeChanger: true,
                              showTotal: (totalNum) => {
                                  return <span>共{totalNum}条</span>;
                              },
                              onShowSizeChange: this.onShowSizeChange,
                              onChange: this.onPageChange,
                          }
                        : false
                }
            />
        );
    }

    render() {
        const { departmentList } = this.props;
        const { params, newList, modalVisiable } = this.state;
        const columns = [
            { title: '部门名称', dataIndex: 'name', key: 'name' },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: (value) => {
                    const item = list[value];
                    return <Badge status={item.type} text={item.content} />;
                },
            },
            { title: '主管', dataIndex: 'director', key: 'director' },
            { title: '部门描述', dataIndex: 'describe', key: 'describe' },
            { title: '更新时间', dataIndex: 'updateTime', key: 'updateTime' },
            {
                title: '操作',
                key: 'action',
                width: 300,
                align: 'center',
                render: (value, row) => {
                    return (
                        <div>
                            <Button icon={<EditOutlined />}>编辑</Button>
                            <Switch
                                className="btn_margin"
                                checkedChildren="开启"
                                unCheckedChildren="关闭"
                                checked={row.status === 1}
                            />
                            <Button danger icon={<DeleteOutlined />}>
                                删除
                            </Button>
                        </div>
                    );
                },
            },
        ];
        const btns = [
            {
                label: '新建部门',
                name: 'add',
                icon: 'PlusOutlined',
            },
            {
                label: '全部折叠',
                name: 'allClose',
                icon: 'SwitcherOutlined',
            },
        ];
        const dataList = Object.keys(params).length ? newList : departmentList;
        return (
            <div className="department_page">
                <DepartmentSearch
                    btns={btns}
                    onBtnClick={this.onBtnClick}
                    searchParamsFun={this.onSearch}
                />
                {this._renderTables(columns, dataList, true)}
                {modalVisiable ? <AddModal onModalCancel={this.onModalCancel} /> : null}
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
    };
};
export default connect(mapState, mapDispatch)(Department);
