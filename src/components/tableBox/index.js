import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Button } from 'antd';
import TableCom from '../tableCom/index';
import './index.less';

class TableBox extends Component {
	static propTypes = {
	    pageNum: Proptypes.number,
	    total: Proptypes.number,
	    onTableSearch: Proptypes.func,
	    loading: Proptypes.bool,
		onSelectRowChange: Proptypes.func,
		title: Proptypes.func,
		// getBusinessList: Proptypes.func,
		tableData: Proptypes.array,
	};

	static defaultProps = {
	    pageNum: 1,
	    total: 0,
	    onTableSearch: () => { },
	    loading: false,
		onSelectRowChange: () => { },
		title: () => { },
		tableData: [],
		// getBusinessList: () => { }
	};

	constructor(props) {
	    super(props);
	    this.state = {
	        // tableData: [],
	        limit: 10,
	    };
	}

	componentDidMount() {
	    // this.getTableData();
	}

	// getTableData = () => {
	//     const that = this;
	//     const arr = [...new Array(32).keys()].map(item => {
	//         return {
	//             id: item,
	//             title: `标题${item}`,
	//             content: `内容${item}`,
	//         };
	//     });
	//     setTimeout(() => {
	//         that.setState({
	//             tableData: arr,
	//         });
	//     }, 700);
	// }

	onShowSizeChange = async (current, pageSize) => {
	    const { onTableSearch } = this.props;
	    await this.setState({
	        // pageNum: 1,
	        pageSize,
	    });
	    onTableSearch({ limit: pageSize, page: 1 });
	};

	onPageChange = async (page) => {
	    const { onTableSearch } = this.props;
	    const { pageSize } = this.state;
	    await this.setState({
	        // pageNum: page,
	    });
	    onTableSearch({ limit: pageSize, page });
	};

	getAction = () => {
	    return {
	        title: '操作',
	        dataIndex: 'action',
			align: 'center',
			width: 120,
			fixed: 'right',
	        render: (text, row) => {
	            return (
	                <Fragment>
	                    <Button size="small" className="btn_margin" type="primary">入职</Button>
	                </Fragment>
	            );
	        },
	    };
	}

	getCheckboxProps = (row) => {
	    return {
	        disabled: row.id % 3 === 0,
	    };
	}

	render() {
	    const { limit } = this.state;
	    const { pageNum, total, tableData, onTableSearch, loading, onSelectRowChange, title } = this.props;
	    const tableColums = [
	        {
	            title: 'ID',
	            align: 'center',
	            dataIndex: 'row',
	            render: (value, row, index) => {
	                return limit * (pageNum - 1) + index + 1;
	            },
	        },
	        {
	            title: '姓名',
	            align: 'center',
	            dataIndex: 'title',
	        },
	        {
	            title: '手机号',
	            align: 'center',
	            dataIndex: 'content',
			},
			{
	            title: '淘宝账户',
	            align: 'center',
	            dataIndex: 'content',
			},
			{
	            title: '身份证号',
	            align: 'center',
	            dataIndex: 'content',
			},
			{
	            title: '入职时间',
	            align: 'center',
	            dataIndex: 'content',
			},
			{
	            title: '录入渠道',
	            align: 'center',
	            dataIndex: 'content',
			},
			{
	            title: '状态',
	            align: 'center',
	            dataIndex: 'content',
	        },
	        this.getAction(),
	    ];
	    return (
	        <div className="table_box">
	            <TableCom
					tableColums={tableColums}
					dataSource={tableData}
					pageNum={pageNum}
					pageSize={limit}
					total={total}
					title={title}
					onTableSearch={onTableSearch}
					onSelectRowChange={onSelectRowChange}
					getCheckboxProps={this.getCheckboxProps}
					onShowSizeChange={this.onShowSizeChange}
					onPageChange={this.onPageChange}
					loading={loading}
					propRowSelection={null}
	            />
	        </div>
	    );
	}
}

const mapDispatch = (dispatch) => {
	return {
		// getBusinessList: dispatch.business.getBusinessList,
    };
};
const mapState = (state) => {
    return {};
};
export default connect(mapState, mapDispatch)(TableBox);
