import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Button, Image, Tag, Progress } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';
import TableCom from '../tableCom/index';
import { projectStatus } from '../../utils/index';
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
		onEditCallback: Proptypes.func,
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
		onEditCallback: () => { },
	};

	constructor(props) {
	    super(props);
	    this.state = {
			limit: 10,
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

	showDetail = (row) => {}

	render() {
	    const { limit } = this.state;
	    const { pageNum, total, tableData, onTableSearch, loading, onEditCallback } = this.props;
	    const tableColums = [
	        {
	            title: '基本信息',
	            align: 'center',
				dataIndex: 'title',
				render: (text, row) => {
					return (
						<div className="title_box">
							<Image
								width={40}
								preview={false}
								src={row.logo}
							/>
							<div className="title_content">
								<div>{row.name}</div>
								<div>{row.describe}</div>
							</div>
						</div>
					);
				 },
	        },
	        {
				title: '状态',
				width: 50,
				align: 'center',
				dataIndex: 'status',
				render: (text) => {
					const activeArr = projectStatus.filter(item => item.value === text);
					return (
						<Tag color={activeArr[0].color}>{activeArr[0].label}</Tag>
					);
				},
			},
			{
				title: '项目进度',
				dataIndex: 'progress',
				align: 'center',
				render: (text, row) => {
					let status = row.status === '4' ? 'exception' : 'active';
					status = text === '100' ? '' : status;
					return (
						<Progress
							percent={text}
							size="small"
							status={status}
						/>
					);
				},
			},
			{
	            title: '最后更新',
				dataIndex: 'updateTime',
				align: 'center',
				render: (text) => (
					<span className="cause_box">
						<FieldTimeOutlined /> {text}
					</span>
				),
			},
			{
	            title: '项目成员',
				dataIndex: 'member',
				align: 'center',
				render: (text) => (
					<span className="member_box">
						{text.map((item, index) => {
							return (
								<Image
									key={`${index}_img`}
									className="member_img"
									width={30}
									preview={false}
									src={item.url}
								/>
							);
						})}
					</span>
				),
			},
			{
	            title: '操作',
	            align: 'center',
				dataIndex: 'action',
				render: (value, row) => {
					return (
						<div>
							<Button className="action_btn" size="small" type="primary">详情</Button>
							<Button className="action_btn" size="small" onClick={() => onEditCallback(row)}>编辑</Button>
							<Button className="action_btn" size="small" danger>删除</Button>
						</div>
					);
				},
			},
		];
	    return (
	        <div className="project_table_box">
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
	return {
		applicationList: state.Common.applicationList,
	};
};
export default connect(mapState, mapDispatch)(TableBox);
