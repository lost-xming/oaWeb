import React from 'react';
import { Table } from 'antd';
import { getWidthLength } from '@/utils/index';

export const AntdTable = (params = {}) => {
    const {
        rowKey,
        tableColums,
        pagination = true,
        pageNum,
        total = 0,
        pageSize = 10,
        onShowSizeChange,
        onPageChange,
        dataSource = [],
        propRowSelection = true,
        selectedRowKeys,
        onSelectChange,
        getCheckboxProps,
        loading = false,
        title = null,
        bordered = false,
        onRow,
    } = params;

    const paginationObj = pagination ? {
        current: pageNum,
        total,
        pageSize,
        showSizeChanger: true,
        showTotal: (totalNum) => {
            return <span>共{totalNum}条</span>;
        },
        onShowSizeChange,
        onChange: onPageChange,
    } : false;

    const keysLengthObj = getWidthLength(dataSource, tableColums);
    tableColums.map(item => {
        if ((!item.width && !item.fixed && !loading) || (!dataSource.length && !loading)) {
            let widthNum = 0;
            if (keysLengthObj[item.field]) {
                const haslength = keysLengthObj[item.field] > 20 ? 20 : keysLengthObj[item.field];
                widthNum = haslength * 15;
            }
            if (!keysLengthObj[item.field]) {
                widthNum = item.title.length * 20;
            }
            if (item.title.length * 15 > keysLengthObj[item.field] * 15) {
                widthNum = item.title.length * 20;
            }
            if (widthNum < 80) {
                widthNum = 80;
            }

            item.width = widthNum;
        }
        return null;
    });
    let allWidth = 0;
    tableColums.map(item => {
        if (item.width) {
            allWidth += item.width;
        }
        return null;
    });
    const hasNotWidthArr = tableColums.filter(item => !item.width);
    allWidth += hasNotWidthArr.length * 200;
    const scrollItem = tableColums.length > 6 ? { x: allWidth } : {};
    const rowSelection = !propRowSelection
        ? null
        : {
            selectedRowKeys,
            onChange: onSelectChange,
            getCheckboxProps,
        };
    return (
        <Table
            rowKey={(record, index) => {
                const keyStr = rowKey ? rowKey(record, index) : record.id;
                return keyStr || JSON.stringify(record);
            }}
            size="small"
            bordered={bordered}
            columns={tableColums}
            pagination={paginationObj}
            dataSource={dataSource}
            rowSelection={rowSelection}
            loading={loading}
            scroll={scrollItem}
            title={title}
            onRow={onRow}
        />
    );
};
