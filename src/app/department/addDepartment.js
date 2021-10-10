import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button, Modal } from 'antd';
import { formItemLayout, setTreeDataFun } from '../../utils/index';
import FormCom from '../../components/searchCom/formCom';
import './index.less';

class AddDepartment extends React.Component {
    static propTypes = {
        departmentList: PropType.array,
        onModalCancel: PropType.func,
        defaultValue: PropType.object,
        type: PropType.number,
        setDepartmentList: PropType.func,
    };

    static defaultProps = {
        departmentList: [],
        onModalCancel: () => { },
        setDepartmentList: () => { },
        defaultValue: {},
        type: 1,
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            directorList: [],
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

    onCancel = () => {
        const { onModalCancel } = this.props;
        onModalCancel();
    }

    onOk = () => {
        this.formRef.current.submit();
    }

    onFinish = (values) => {
        // todo 当部门改变时，去请求当前部门的人员
        const { setDepartmentList } = this.props;
        setDepartmentList(values);
        this.onCancel();
    }

    onSuperiorChange = (value) => {
        console.log(666, value);
    }

    render() {
        const { visible, directorList } = this.state;
        const { defaultValue, departmentList, type } = this.props;
	    const formArr = [
	        {
	            type: 'input',
	            name: 'departmentName',
	            label: '部门名称',
	            required: true,
	        },
	        {
	            type: 'treeSelect',
	            name: 'superior',
                label: '上级部门',
                arr: setTreeDataFun(departmentList),
                onChange: this.onSuperiorChange,
	        },
	        {
	            type: 'select',
	            name: 'director',
                label: '主管人员',
                isNotShow: type === 1, // 当type === 1 时，不添加主管人员
                required: true,
                arr: directorList,
	        },
	        {
	            type: 'textArea',
	            name: 'description',
	            label: '部门描述',
	        },
        ];
        return (
            <div className="add_department_com">
                <Modal
                    title="新建部门"
                    visible={visible}
                    maskClosable={false}
                    width={700}
                    onCancel={this.onCancel}
                    footer={[
                        <Button
                            type="primary"
                            key="btn_1"
                            onClick={this.onOk}>
                            确定
                        </Button>,
                        <Button
                            key="btn_2"
                            onClick={this.onCancel}>
                            取消
                        </Button>,
                    ]}>
                    <Form
                        ref={this.formRef}
                        onFinish={this.onFinish}
                        {...formItemLayout(6, 15)}
                    >
                        <FormCom searchArr={formArr} defaultValue={defaultValue} />
                    </Form>
                </Modal>
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
        departmentList: state.Common.departmentList,
    };
};
export default connect(mapState, mapDispatch)(AddDepartment);
