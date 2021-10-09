import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Tree, Button, Radio, Select } from 'antd';
import { directorArr } from '../../utils/index';
// import FormCom from '../../components/searchCom/formCom';
import './cardPage.less';

const { Option } = Select;
const typeArr = [{ value: 1, label: '审核人' }, { value: 2, label: '抄送人' }];
const personnelArr = [
    { value: 0, label: '指定人员' },
    { value: 1, label: '主管' },
    { value: 2, label: '角色', disabled: true },
    { value: 3, label: '连续多级主管', disabled: true },
    { value: 4, label: '发起人自己', disabled: true },
];

class CardInfo extends React.Component {
    static propTypes = {
        departmentList: PropType.array,
        defaultValue: PropType.object,
        setPersonnelList: PropType.func,
        personnelList: PropType.array,
        onOkCallback: PropType.func,
    };

    static defaultProps = {
        departmentList: [],
        setPersonnelList: () => { },
        defaultValue: {},
        personnelList: [],
        onOkCallback: () => { },
    };

    constructor(props) {
        super(props);
        this.state = {
            typeValue: 1,
            personnelValue: 0,
            personnelTargetId: [],
            directorValue: 0,
            expandedKeys: [],
        };
        this.formRef = React.createRef();
    }

    componentDidMount() {
        this.initData();
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {
        const { defaultValue } = this.props;
        this.setState({
            typeValue: defaultValue.type,
            personnelValue: defaultValue.personnelValue,
            personnelTargetId: defaultValue.targetDep,
            directorValue: defaultValue.directorValue,
            expandedKeys: this.setDefaultKeys(defaultValue.targetDep),
        });
    };

    setDefaultKeys = (keys) => {
        const expandedArr = [];
        keys.map(itemValue => {
            const strArr = itemValue.split('-');
            strArr.splice(strArr.length - 1, 1);
            const newArr = strArr.map((item) => {
                return `dep-${item}`;
            });
            expandedArr.push(...newArr);
            return null;
        });
        return [...new Set(expandedArr)];
     }

    onCancel = () => {
        // const { onModalCancel } = this.props;
        // onModalCancel();
    }

    onOk = () => {
        this.formRef.current.submit();
    }

    onSave = () => {
        const { onOkCallback } = this.props;
        const { typeValue, personnelValue, personnelTargetId, directorValue } = this.state;
        const params = {
            type: typeValue,
            personnelValue: typeValue === 1 ? personnelValue : null,
            directorValue: typeValue === 1 && personnelValue === 1 ? directorValue : null,
            personnelTargets: ((typeValue === 1 && personnelValue === 0) || typeValue === 2)
                ? this.getPersonnel(personnelTargetId) : [],
            targetDep: ((typeValue === 1 && personnelValue === 0) || typeValue === 2)
            ? personnelTargetId : [],
        };
        onOkCallback(params);
    }

    onReset = () => {
        this.setState({
            typeValue: 1,
            personnelValue: 0,
            personnelTargetId: [],
            directorValue: 0,
            expandedKeys: [],
        });
    }

    getPersonnel = (personnelValue = []) => {
        const { personnelList } = this.props;

        const arr = personnelValue.map(item => {
            const strArr = item.split('-');
            return strArr[strArr.length - 1];
        });
        const personArr = personnelList.filter(item => {
            return arr.indexOf(`${item.id}`) > -1;
        });
        return personArr;
     }

    onTypeChange = (e) => {
        this.setState({
            typeValue: e.target.value,
        });
    }

    onPersonnelChange = (e) => {
        this.setState({
            personnelValue: e.target.value,
        });
    }

    onPersonnelCheck = (selectedKeys) => {
        this.setState({
            personnelTargetId: selectedKeys,
        });
    }

    onDirectorValueChange = (value) => {
        this.setState({
            directorValue: value,
        });
    }

    onExpand = (keys) => {
        this.setState({
            expandedKeys: keys,
        });
    }

    resetData = (people, deps, key = null) => {
        const newData = [];
        deps.map(item => {
            const newItem = {
                title: `${item.name} dep-${item.id}`,
                key: `dep-${item.id}`,
                disabled: true,
                children: [],
            };
            const childrenArr = people.filter(it => it.departments.indexOf(item.id) > -1);
            childrenArr.map(it => {
                newItem.children.push(
                    {
                        title: `${it.name} - ${key ? `${key}-` : ''}${item.id}-${it.id}`,
                        key: `${key ? `${key}-` : ''}${item.id}-${it.id}`,
                    },
                );
                return null;
            });
            // 子集
            if (item.children && Array.isArray(item.children)) {
                const depsItem = this.resetData(people, item.children, `${key ? `${key}-` : ''}${item.id}`);
                newItem.children.push(...depsItem);
            }
            newData.push(newItem);
            return null;
        });
        return newData;
    }

    _renderTypeUp = () => {
        const { typeValue } = this.state;
        switch (typeValue) {
            case 1:
                return this._renderPersonnel();
            case 2:
                return this._renderCcItem();
            default:
                return null;
        }
    }

    _renderOption2 = () => {
        const { personnelValue } = this.state;
        switch (personnelValue) {
            case 0:
               return this._renderTargetPer();
            case 1:
               return this._renderMan();
            case 2:
               return null;
            case 3:
               return null;
            case 4:
               return null;
            default:
                return null;
        }
     }

    _renderCcItem = () => {
        return (
            <div className="type_option">
                <div className="type_option_label">选择抄送人员：</div>
                {this._renderTargetPersonnel()}
            </div>
        );
    }

    _renderPersonnel() {
        const { personnelValue } = this.state;
        return (
            <div className="type_option">
                <div className="type_option_label">审核人设置：</div>
                <Radio.Group onChange={this.onPersonnelChange} value={personnelValue}>
                    {personnelArr.map((it, index) => {
                        return <Radio key={`${index}_radio`} disabled={it.disabled} value={it.value}>{it.label}</Radio>;
                    })}
                </Radio.Group>
            </div>
        );
    }

    _renderTargetPersonnel() {
        const { personnelList, departmentList } = this.props;
        const { personnelTargetId, expandedKeys } = this.state;
        const treeData = this.resetData(personnelList, departmentList);
        return (
            <div>
                <div className="tips">不能超过20人</div>
                <Tree
                    checkable
                    checkedKeys={personnelTargetId}
                    expandedKeys={expandedKeys}
                    onCheck={this.onPersonnelCheck}
                    treeData={treeData}
                    onExpand={this.onExpand}
                />
            </div>
        );
    }

    _renderMan() {
        const { directorValue, typeValue } = this.state;
        if (typeValue !== 1) {
            return null;
        }

        return (
            <div className="type_option">
                <div className="type_option_label">发起人的：</div>
                <Select
                    allowClear
                    value={directorValue}
                    placeholder="请选择..."
                    onChange={this.onDirectorValueChange}
                    style={{ width: 150 }}
                    >
                    {directorArr.map((it) => {
                        return (
                            <Option key={it.value} value={it.value}>
                                {it.label}
                            </Option>
                        );
                    })}
                </Select>
            </div>
        );
    }

    _renderTargetPer() {
        const { typeValue } = this.state;
        if (typeValue !== 1) {
            return null;
        }
        return (
            <div className="type_option">
                <div className="type_option_label">选择人员：</div>
                {this._renderTargetPersonnel()}
            </div>
        );
    }

    render() {
        const { typeValue } = this.state;
        return (
            <div className="card_info">
                <div className="type_option">
                    <div className="type_option_label">节点类型：</div>
                    <Radio.Group onChange={this.onTypeChange} value={typeValue}>
                        {typeArr.map((it, index) => {
                            return <Radio key={`${index}_radio`} value={it.value}>{it.label}</Radio>;
                        })}
                    </Radio.Group>
                </div>
                {this._renderTypeUp()}
                {this._renderOption2()}
                <div className="card_form_btns">
                    <Button type="primary" className="btn_margin" onClick={this.onSave}>提交</Button>
                    <Button danger onClick={this.onReset}>重置</Button>
                </div>
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
        setPersonnelList: dispatch.Common.setPersonnelList,
    };
};
const mapState = (state) => {
    return {
        departmentList: state.Common.departmentList,
        personnelList: state.Common.personnelList,
    };
};
export default connect(mapState, mapDispatch)(CardInfo);
