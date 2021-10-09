import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button, Modal } from 'antd';
import { formItemLayout } from '../../utils/index';
import FormCom from '../../components/searchCom/formCom';
import './index.less';

class AddDepartment extends React.Component {
    static propTypes = {
        departmentList: PropType.array,
        onModalCancel: PropType.func,
        defaultValue: PropType.object,
        type: PropType.number,
        setPersonnelList: PropType.func,
        onModalOk: PropType.func,
    };

    static defaultProps = {
        departmentList: [],
        onModalCancel: () => { },
        setPersonnelList: () => { },
        defaultValue: {},
        onModalOk: () => { },
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

    onFinish = async (values) => {
        const { setPersonnelList, onModalOk } = this.props;
        await setPersonnelList(values);
        onModalOk();
        this.onCancel();
    }

    onSuperiorChange = (value) => {
        console.log(666, value);
    }

    render() {
        const { visible, directorList } = this.state;
        const { defaultValue, departmentList } = this.props;
	    const formArr = [
	        {
	            type: 'input',
	            name: 'name',
	            label: '姓名',
	            required: true,
            },
            {
	            type: 'radio',
	            name: 'sex',
                label: '性别',
                arr: [{ value: 0, label: '男' }, { value: 1, label: '女' }],
                required: true,
	        },
            {
	            type: 'timer',
	            name: 'birth',
                label: '出生日期',
                required: true,
            },
            {
	            type: 'input',
	            name: 'email',
                label: '邮箱地址',
                required: true,
            },
            {
	            type: 'input',
	            name: 'mobile',
                label: '手机号码',
                required: true,
            },
	        {
	            type: 'treeSelect',
	            name: 'department',
                label: '部门',
                arr: departmentList,
                multiple: true,
                onChange: this.onSuperiorChange,
                required: true,
	        },
	        {
	            type: 'input',
	            name: 'jobTitle',
                label: '职务',
                required: true,
                arr: directorList,
	        },
            {
	            type: 'input',
	            name: 'emergencyName',
                label: '紧急联系人姓名',
                required: true,
            },
            {
	            type: 'input',
	            name: 'emergencyMobile',
                label: '紧急联系人号码',
                required: true,
            },

        ];
        const formArr2 = [
	        {
	            type: 'input',
	            name: 'hometown',
	            label: '籍贯',
	            required: true,
            },
            {
	            type: 'input',
	            name: 'description',
                label: '学历',
                required: true,
	        },
            {
	            type: 'input',
	            name: 'education',
                label: '专业',
                required: true,
            },
            {
	            type: 'input',
	            name: 'school',
                label: '毕业院校',
                required: true,
            },
            {
	            type: 'timer',
	            name: 'graduatedDate',
                label: '毕业时间',
                required: true,
            },
	        {
	            type: 'textArea',
	            name: 'personal',
                label: '个人简介',
	        },
        ];
        return (
            <div className="add_department_com">
                <Modal
                    title="新增员工"
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
                        <div className="divider_line">
                            基本信息
                        </div>
                        <FormCom searchArr={formArr} defaultValue={defaultValue} />
                        <div className="divider_line">
                            详细信息
                        </div>
                        <FormCom searchArr={formArr2} defaultValue={defaultValue} />
                    </Form>
                </Modal>
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
    };
};
export default connect(mapState, mapDispatch)(AddDepartment);
