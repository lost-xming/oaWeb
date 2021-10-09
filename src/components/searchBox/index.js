import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'antd';
import FormCom from '../searchCom/formCom';
// import {
//     uploadUrl,
//     versionValidator,
//     beforeUploadImgFile,
//     normFile,
//     docxNormFile,
//     beforeUploadDocxFile,
// } from '../../utils/FormRules';
import { formItemLayout } from '../../utils/index';
import './index.less';

class SearchBox extends Component {
	formRef = React.createRef();

	// onVersionChange = (e) => {
	//     const { getFieldsValue } = this.formRef.current;
	//     const versionName = getFieldsValue('versionName');
	// }

	onVersionInputBlur = (e) => {
	}

	onFinish = (values) => {
	}

	render() {
	    const defaultValue = {
	        versionName: '1.1.2',
	        versionTextArea: '我是版本说明的默认数据',
	        applicableForm: ['PC', 'MOBILE'],
	        timeStart: '2021-07-11',
	        fileTest: [
	            {
	                uid: '-1',
	                name: 'image.png',
	                status: 'done',
	                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	            },
	            {
	                uid: '-2',
	                name: 'image.png',
	                status: 'done',
	                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	            },
	        ],
	        docxFileTest: [
	            {
	                uid: '-1',
	                name: 'image.png',
	                status: 'done',
	                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	            },
	            {
	                uid: '-2',
	                name: 'image.png',
	                status: 'done',
	                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	            },
	        ],
	    };
	    const formArr = [
	        {
	            type: 'input',
	            name: 'versionName',
	            label: '版本号',
	            placeholder: '请输入版本号名称...',
	            required: true,
	            extra: '版本号示例：V1.0.1',
	            // disabled
	            addonBefore: 'V',
	            others: {
	                validateTrigger: 'onBlur',
	            },
	            onChange: this.onVersionChange,
	            onBlurFun: this.onVersionInputBlur,
	            validator: versionValidator,
	        },
	        {
	            type: 'textArea',
	            name: 'versionTextArea',
	            label: '版本说明',
	        },
	        {
	            type: 'timer',
	            name: 'timeStart',
	            label: '发布时间',
	            required: true,
	        },
	        {
	            type: 'timer',
	            name: 'timeEnd',
	            label: '发布时间',
	            required: true,
	        },
	        {
	            type: 'file',
	            name: 'fileTest',
	            url: uploadUrl,
	            label: 'img相关文件',
	            required: true,
	            normFile,
	            beforeUpload: beforeUploadImgFile,
	        },
	        {
	            type: 'file',
	            name: 'docxFileTest',
	            url: uploadUrl,
	            label: 'docx相关文件',
	            required: true,
	            normFile: docxNormFile,
	            beforeUpload: beforeUploadDocxFile,
	        },
	    ];
	    return (
	        <div className="search_box">
	            <Form
	                ref={this.formRef}
	                onFinish={this.onFinish}
	                {...formItemLayout(6, 18)}
	            >
	                <FormCom searchArr={formArr} defaultValue={defaultValue} />
	                <Button type="primary" htmlType="submit">
						提交
	                </Button>
	            </Form>
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
