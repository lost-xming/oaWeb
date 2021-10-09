import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import FormCom from '../searchCom/newSearch';
import './index.less';

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

    onSearch = (params) => {
        const { searchParamsFun } = this.props;
        searchParamsFun(params);
    }

    render() {
        const { btns, onBtnClick } = this.props;
        const defaultValue = {};
        const optionArr = [
            {
                type: 'input',
                name: 'name',
                label: '姓名',
            },
            {
                type: 'input',
                name: 'mobile',
                label: '手机号',
            },
        ];
        return (
            <div className="department_search_box">
                <FormCom
                    optionArr={optionArr}
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
