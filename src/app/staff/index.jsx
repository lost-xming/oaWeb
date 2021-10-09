import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Table, Badge, Button, Switch, Input, Tree, Spin } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import StaffSearch from '../../components/searchBox/staff';
import AddModal from './addPersonnel';
import './index.less';

const list = [
    { type: 'error', content: '停用' },
    { type: 'success', content: '正常' },
];
const { Search } = Input;
class Staff extends React.Component {
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
        this.state = {
            pageNum: 1,
            total: 0,
            pageSize: 10,
            params: {},
            modalVisiable: false,
            searchValue: '',
            expandedKeys: [],
            autoExpandParent: true,
            dataList: [],
            treeSelectId: '',
            pagePersonnelList: [],
            loading: false,
        };
    }

    componentDidMount() {
        const { departmentList } = this.props;
        const { personnelList } = this.props;
        // 获取人员列表
        this.setState({
            pagePersonnelList: personnelList,
        });
        this.initData();
        this.generateList(departmentList);
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {
        const { personnelList } = this.props;
        const { treeSelectId, params } = this.state;
        this.setState({
            loading: true,
        });
        // 过滤 data值
        const pagePersonnelList = personnelList.filter((item) => {
            return (
                (!params.name || item.name.indexOf(params.name) > -1) &&
                (!params.mobile || item.mobile.indexOf(params.mobile) > -1) &&
                (!treeSelectId || item.departments.indexOf(treeSelectId) > -1)
            );
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                pagePersonnelList,
            });
        }, 500);
    };

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

    onSearch = async (params) => {
        await this.setState({
            params,
        });
        this.initData();
    };

    onExpand = (expandedKeys) => {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    };

    getParentKey = (key, tree) => {
        let parentKey;
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            if (node.children) {
                if (node.children.some((item) => item.id === key)) {
                    parentKey = node.id;
                } else if (this.getParentKey(key, node.children)) {
                    parentKey = this.getParentKey(key, node.children);
                }
            }
        }
        return parentKey;
    };

    generateList = (data) => {
        const { dataList } = this.state;
        for (let i = 0; i < data.length; i++) {
            const node = data[i];
            const { id, name } = node;
            dataList.push({ key: id, title: name });
            if (node.children) {
                this.generateList(node.children);
            }
        }
    };

    onTreeSelect = async (id) => {
        await this.setState({
            treeSelectId: id ? id[0] : '',
        });
        this.initData();
    };

    onChange = (e) => {
        const { dataList } = this.state;
        const { departmentList } = this.props;
        const { value } = e.target;
        const expandedKeys = dataList
            .map((item) => {
                if (item.title.indexOf(value) > -1) {
                    const newList = this.getParentKey(item.key, departmentList);
                    return newList;
                }
                return null;
            })
            .filter((item, i, self) => item && self.indexOf(item) === i);

        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true,
        });
    };

    _renderTables(columns = [], data = [], isOne = false) {
        const { pageNum, total, pageSize } = this.state;
        return (
            <Table
                className="department_table"
                columns={columns}
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
        const { departmentList, personnelList } = this.props;
        const { params, modalVisiable, pagePersonnelList, loading, treeSelectId } = this.state;
        const columns = [
            { title: '姓名', dataIndex: 'name', key: 'name' },
            {
                title: '账号状态',
                dataIndex: 'status',
                render: (value) => {
                    const item = list[value];
                    return <Badge status={item.type} text={item.content} />;
                },
            },
            { title: '手机', dataIndex: 'mobile' },
            { title: '创建时间', dataIndex: 'createTime' },
            {
                title: '操作',
                width: 300,
                dataIndex: 'action',
                align: 'center',
                render: (value, row) => {
                    return (
                        <div>
                            <Button icon={<EditOutlined />}>编辑</Button>
                            <Switch
                                className="btn_margin"
                                checkedChildren="开启"
                                unCheckedChildren="停用"
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
                label: '新增员工',
                name: 'add',
                icon: 'PlusOutlined',
            },
        ];
        const dataList =
            Object.keys(params).length || treeSelectId ? pagePersonnelList : personnelList;

        const { searchValue, expandedKeys, autoExpandParent } = this.state;
        const loop = (data) => {
            return data.map((item) => {
                const index = item.name.indexOf(searchValue);
                const beforeStr = item.name.substr(0, index);
                const afterStr = item.name.substr(index + searchValue.length);
                const title =
                    index > -1 ? (
                        <span>
                            {beforeStr}
                            <span className="site-tree-search-value">{searchValue}</span>
                            {afterStr}
                        </span>
                    ) : (
                        <span>{item.name}</span>
                    );
                if (item.children) {
                    return { title, key: item.id, children: loop(item.children) };
                }

                return {
                    title,
                    key: item.id,
                };
            });
        };

        return (
            <div className="staff_page">
                <div className="staff_content">
                    <div className="staff_left">
                        <Search
                            style={{ marginBottom: 8 }}
                            placeholder="请输入..."
                            onChange={this.onChange}
                        />
                        <Tree
                            onExpand={this.onExpand}
                            expandedKeys={expandedKeys}
                            autoExpandParent={autoExpandParent}
                            treeData={loop(departmentList)}
                            onSelect={this.onTreeSelect}
                        />
                    </div>
                    <div className="staff_right">
                        <StaffSearch
                            btns={btns}
                            onBtnClick={this.onBtnClick}
                            searchParamsFun={this.onSearch}
                        />
                        <Spin spinning={loading}>
                            {this._renderTables(columns, dataList || [], true)}
                        </Spin>
                    </div>
                </div>
                {modalVisiable ? (
                    <AddModal onModalCancel={this.onModalCancel} onModalOk={this.initData} />
                ) : null}
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
export default connect(mapState, mapDispatch)(Staff);
