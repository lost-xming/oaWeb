import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { AntdTable } from '../antdItem';

class TableCom extends Component {
	static propTypes = {
	    tableColums: Proptypes.array,
	    pageNum: Proptypes.number,
	    total: Proptypes.number,
	    pagination: Proptypes.bool,
	    onTableSearch: Proptypes.func,
	    dataSource: Proptypes.array,
	    propRowSelection: Proptypes.bool,
	    onSelectRowChange: Proptypes.func,
	    getCheckboxProps: Proptypes.func,
	    loading: Proptypes.bool,
	    title: Proptypes.func,
	    pageSize: Proptypes.number,
	    onShowSizeChange: Proptypes.func,
		onPageChange: Proptypes.func,
		selectedRowKeys: Proptypes.array,
	};

	static defaultProps = {
	    tableColums: [],
	    pageNum: 1,
	    total: 0,
	    pagination: true,
	    onTableSearch: () => { },
	    dataSource: [],
	    propRowSelection: true,
	    onSelectRowChange: () => { },
	    getCheckboxProps: () => { },
	    loading: false,
	    title: () => { },
	    onShowSizeChange: () => { },
		onPageChange: () => { },
		selectedRowKeys: [],
	    pageSize: 10,
	};

	onSelectChange = (selectedRowKeys, item) => {
	    const { onSelectRowChange } = this.props;
	    onSelectRowChange(selectedRowKeys, item);
	};

	render() {
	    const { selectedRowKeys } = this.props;
	    const params = {
	        ...this.props,
	        selectedRowKeys,
	        onSelectChange: this.onSelectChange,
	        bordered: false,
	    };
	    return (
	        <div className="table_com">
	            { AntdTable(params) }
	        </div>
	    );
	}
}

export default TableCom;
