import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Drawer } from 'antd';
import TableCom from '../tableCom/index';
import { statusArr } from '../../utils/index';
import Option1 from '../../app/task/option1';
import './index.less';

class TableBox extends Component {
	static propTypes = {
	    pageNum: Proptypes.number,
	    total: Proptypes.number,
	    onTableSearch: Proptypes.func,
	    loading: Proptypes.bool,
		title: Proptypes.func,
		tableData: Proptypes.array,
		applicationList: Proptypes.array,
		callback: Proptypes.func,
	};

	static defaultProps = {
	    pageNum: 1,
	    total: 0,
	    onTableSearch: () => { },
	    loading: false,
		title: () => { },
		tableData: [],
		applicationList: [],
		callback: () => { },
	};

	constructor(props) {
	    super(props);
	    this.state = {
			limit: 10,
			detailData: {},
			visible: false,
	    };
	}

	componentDidMount() {
	}

	onShowSizeChange = async (current, pageSize) => {
	    const { onTableSearch } = this.props;
	    await this.setState({
			limit: pageSize,
	    });
	    onTableSearch({ limit: pageSize, page: 1 });
	};

	onPageChange = async (page) => {
	    const { onTableSearch } = this.props;
	    const { pageSize } = this.state;
	    onTableSearch({ limit: pageSize, page });
	};

	showDetail = (row) => {
		this.setState({
			detailData: row,
			visible: true,
		});
	}

	onDrawerClose = () => {
		const { callback } = this.props;
		this.setState({
			visible: false,
		});
		callback();
	}

	_renderDrawer() {
		const { visible, detailData } = this.state;
		return (
			<Drawer title="详情" width={700} placement="right" onClose={this.onDrawerClose} visible={visible}>
				<Option1 defaultValue={detailData} callback={this.onDrawerClose} />
			</Drawer>
		);
	}

	render() {
	    const { limit, visible } = this.state;
	    const { pageNum, total, tableData, onTableSearch, loading, applicationList } = this.props;
	    const tableColums = [
	        {
	            title: '标题',
	            align: 'center',
				dataIndex: 'userName',
				render: (text, row) => {
					const applicationArr = applicationList.filter(item => item.id === row.applicationId) || [];
					return `${text}的${applicationArr[0].title}`;
				 },
	        },
	        {
	            title: '摘要',
				dataIndex: 'cause',
				render: (text, row) => {
					return (
						<div className="cause_box">
							<div>{text}</div>
							<div>开始时间：{row.startTime}</div>
							<div>结束时间：{row.endTime}</div>
						</div>
					);
				},
			},
			{
	            title: '发起人',
				dataIndex: 'userName',
				render: (text) => <span className="cause_box">{text}</span>,
			},
			{
	            title: '发起时间',
				dataIndex: 'createTime',
				render: (text) => <span className="cause_box">{text}</span>,
			},
			{
	            title: '完成时间',
				dataIndex: 'taskEndTime',
				render: (text) => <span className="cause_box">{text}</span>,
			},
			{
	            title: '流程状态',
	            align: 'center',
				dataIndex: 'status',
				render: (value) => {
					const itemArr = statusArr.filter(item => item.value === value) || [];
					return itemArr[0] ? <span style={{ color: itemArr[0].color }}>{itemArr[0].label}</span> : '';
				},
			},
		];
	    return (
	        <div className="task_table_box">
				<TableCom
					tableColums={tableColums}
					dataSource={tableData}
					pageNum={pageNum}
					pageSize={limit}
					total={total}
					title={false}
					onTableSearch={onTableSearch}
					onShowSizeChange={this.onShowSizeChange}
					onPageChange={this.onPageChange}
					loading={loading}
					propRowSelection={null}
					rowKey={(row) => `${row.id}`}
					onRow={row => {
						return {
						  onClick: () => this.showDetail(row), // 点击行
						};
					  }}
				/>
				{visible ? this._renderDrawer() : null}
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
	return {
		applicationList: state.Common.applicationList,
	};
};
export default connect(mapState, mapDispatch)(TableBox);
