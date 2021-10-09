import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import FormCom from '../searchCom/search';

const applicableOption = [{
    label: 'PC',
    value: 'PC',
}, {
    label: '移动',
    value: 'MOBILE',
}];

class SearchBox extends Component {
    static propTypes = {
        onBtnClick: Proptypes.func,
        searchParamsFun: Proptypes.func,
        btns: Proptypes.array,
    };

    static defaultProps = {
        onBtnClick: () => { },
        searchParamsFun: () => { },
        btns: [],
    };

    // componentDidMount() {}

    onVersionChange = (e) => {
        console.log('version_input_change --->>>', e.target.value);
    }

    onSearch = (params) => {
        const { searchParamsFun } = this.props;
        searchParamsFun(params);
    }

    render() {
        const { btns, onBtnClick } = this.props;
        const defaultValue = {
            timeStart: '2021-07-11',
        };
        const optionArr = [
            {
                type: 'input',
                name: 'versionName',
                label: '业务员',
                // placeholder: '请输入业务员',
                // onChange: this.onVersionChange,
            },
            {
                type: 'input',
                label: '手机号',
                name: 'membername',
            },
            {
                type: 'input',
                label: '身份证号码',
                name: 'memberaffiliatedcompanyname',
            },
            {
                type: 'input',
                label: '身份证号码',
                name: 'memberaffiliatedcompanyname',
            },
        ];
        const othersArr = [
            {
                type: 'input',
                name: 'versionName',
                label: '业务员',
                placeholder: '请输入版本号名称...',
                onChange: this.onVersionChange,
            },
            {
                type: 'input',
                label: '手机号',
                name: 'membername',
            },
            {
                type: 'input',
                label: '身份证号码',
                name: 'memberaffiliatedcompanyname',
            },
            {
                type: 'input',
                label: '录入渠道',
                name: 'memberaffiliatedcompanyname',
            },
            {
                type: 'select',
                label: '状态',
                name: 'applicableForm',
                mode: 'multiple',
                arr: applicableOption,
            },
            {
                type: 'time',
                label: '入职时间',
                name: 'timeStart',
            },
        ];

        return (
            <div className="search_box">
                <FormCom
                    optionArr={optionArr}
                    othersArr={othersArr}
                    onRef={this.onRef}
                    btns={btns}
                    onBtnClick={onBtnClick}
                    defaultValue={defaultValue}
                    onSearch={this.onSearch}
                />
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
    };
};
const mapState = (state) => {
    return {};
};
export default connect(mapState, mapDispatch)(SearchBox);
