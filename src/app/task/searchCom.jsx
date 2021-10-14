import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Form, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import { formItemLayout } from '../../utils/index';
import {
    FormInputItem,
    FormInputItem2,
    FormSelectItem,
    FormTimerItem,
    FormTextAreaItem,
    FormFileItem,
    FormRadioItem,
    FormTreeSelectItem,
    FormRangePckerItem,
} from '../../components/formItem/index';
import './searchCom.less';

class SearchCom extends React.Component {
    static propTypes = {
        defaultValue: PropType.object,
        onOkCallback: PropType.func,
    };

    static defaultProps = {
        defaultValue: {},
        onOkCallback: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            isNotShow: true,
        };
        this.formRef = React.createRef();
    }

    componentDidMount() {
        this.initData();
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    onFinish = (values) => {
        const { onOkCallback } = this.props;
        const submitTime =
            values.submitTime && Array.isArray(values.submitTime)
                ? [
                      moment(values.submitTime[0]).format('YYYY-MM-DD'),
                      moment(values.submitTime[1]).format('YYYY-MM-DD'),
                  ]
                : null;
        const completionTime =
            values.completionTime && Array.isArray(values.completionTime)
                ? [
                      moment(values.completionTime[0]).format('YYYY-MM-DD'),
                      moment(values.completionTime[1]).format('YYYY-MM-DD'),
                  ]
                : null;
        onOkCallback({ ...values, submitTime, completionTime });
    };

    onAdvancedSearch = () => {
        const { isNotShow } = this.state;
        this.setState({
            isNotShow: !isNotShow,
        });
    };

    _renderItem(searchArr, defaultValue) {
        return searchArr.map((item) => {
            const { type, isNotShow } = item;
            if (isNotShow) {
                return null;
            }
            switch (type) {
                case 'input':
                    return FormInputItem(item, defaultValue);
                case 'password':
                    return FormInputItem2(item, defaultValue);
                case 'select':
                    return FormSelectItem(item, defaultValue);
                case 'timer':
                    return FormTimerItem(item, defaultValue);
                case 'textArea':
                    return FormTextAreaItem(item, defaultValue);
                case 'file':
                    return FormFileItem(item, defaultValue);
                case 'radio':
                    return FormRadioItem(item, defaultValue);
                case 'rangePicker':
                    return FormRangePckerItem(item, defaultValue);
                case 'treeSelect':
                    return FormTreeSelectItem(item, defaultValue);
                default:
                    return null;
            }
        });
    }

    render() {
        const { defaultValue } = this.props;
        const { isNotShow } = this.state;
        const formArr = [
            {
                type: 'input',
                name: 'keywords',
                placeholder: '请输入关键字 包括发起人、摘要',
                style: { width: 400 },
                suffix: <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />,
            },
        ];
        const formArr2 = [
            {
                type: 'rangePicker',
                name: 'submitTime',
                label: '提交审批时间',
                isNotShow,
            },
            {
                type: 'rangePicker',
                name: 'completionTime',
                label: '完成审批时间',
                isNotShow,
            },
            {
                type: 'input',
                name: 'initiator',
                label: '审批单发起人',
                style: { width: 240 },
                isNotShow,
            },
        ];
        return (
            <div className="search_com">
                <Form ref={this.formRef} onFinish={this.onFinish} {...formItemLayout(6, 15)}>
                    <div className={isNotShow ? 'search_com_content' : 'search_com_content_all'}>
                        {this._renderItem(formArr, defaultValue)}
                        {this._renderItem(formArr2, defaultValue)}
                        <div className="search_com_btns">
                            <Button type="primary" className="search_com_btns_b1" htmlType="submit">
                                搜索
                            </Button>
                            {isNotShow ? null : <Button htmlType="reset">清空搜索条件</Button>}
                            <Button type="link" onClick={this.onAdvancedSearch}>
                                {isNotShow ? '高级搜索' : '关闭高级搜索'}
                            </Button>
                        </div>
                    </div>
                </Form>
                {isNotShow ? null : <Divider />}
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
        setDepartmentList: dispatch.Common.setDepartmentList,
    };
};
const mapState = (state) => {
    return {
        // departmentList: state.Common.departmentList,
    };
};
export default connect(mapState, mapDispatch)(SearchCom);
