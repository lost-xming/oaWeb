import React from 'react';
import { Input, Form, Select, DatePicker, Upload, Button, Radio, TreeSelect } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import './index.css';

const { TextArea, Group } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TreeNode } = TreeSelect;
const noFun = () => { };
const Format = 'YYYY-MM-DD';
export const FormInputItem = (item = {}, defaultValue = {}) => {
    const {
        required,
        validator,
        onChange,
        placeholder,
        addonBefore,
        name,
        label,
        onBlurFun,
        extra,
        addonAfter,
        onEnter,
        disabled,
        inpuType,
        others = {},
        style,
        className = '',
        maxLength = 10,
    } = item;
    const placeholderStr = placeholder || `请输入${label}`;
    const onChangeFun = onChange || noFun;
    const onEnterFun = onEnter || noFun;
    const rules = validator ? [{ validator }] : [{ required, message: `请输入${label}` }];
    // const addonAfterNode = addonAfter ? addonAfter() : null;
    return (
        <Form.Item
            key={name}
            label={label}
            name={name}
            required={required}
            initialValue={defaultValue[name]}
            extra={extra}
            rules={rules}
            {...others}
        >
            <Input
                addonBefore={addonBefore}
                // addonAfter={addonAfterNode}
                disabled={disabled}
                type={inpuType}
                onBlur={onBlurFun}
                onPressEnter={onEnterFun}
                style={style}
                maxLength={maxLength}
                className={className}
                onChange={onChangeFun}
                placeholder={placeholderStr}
            />
        </Form.Item>
    );
};

export const FormInputItem2 = (item = {}, defaultValue = {}) => {
    const {
        required,
        validator,
        placeholder,
        name,
        label,
        onBlurFun,
        onEnter,
        others = {},
        style,
        className = '',
        maxLength = 10,
    } = item;
    const placeholderStr = placeholder || `请输入${label}`;
    const onEnterFun = onEnter || noFun;
    const rules = validator ? [{ validator }] : [{ required, message: `请输入${label}` }];
    // const addonAfterNode = addonAfter ? addonAfter() : null;
    return (
        <Form.Item
            key={name}
            label={label}
            name={name}
            required={required}
            initialValue={defaultValue[name]}
            rules={rules}
            {...others}
        >
            <Input.Password
                onBlur={onBlurFun}
                style={style}
                maxLength={maxLength}
                className={className}
                placeholder={placeholderStr}
                onPressEnter={onEnterFun}
            />
        </Form.Item>
    );
};

export const FormSelectItem = (item = {}, defaultValue = {}) => {
    const { required, validator, onChange, placeholder, mode, name, label, arr, extra, disabled, others = {} } = item;
    // const modeStr = mode || 'tags';
    const placeholderStr = placeholder || `请选择${label}`;
    const onChangeFun = onChange || noFun;
    const rules = validator ? [{ validator }] : [{ required, message: `请选择${label}` }];
    return (
        <Form.Item
            key={name}
            name={name}
            label={label}
            extra={extra}
            initialValue={defaultValue[name]}
            rules={rules}
            {...others}
        >
            <Select
                allowClear
                disabled={disabled}
                // mode={modeStr}
                placeholder={placeholderStr}
                onChange={onChangeFun}
            >
                {arr.map((it) => {
                    return (
                        <Option key={it.value} value={it.value}>
                            {it.lab || it.label}
                        </Option>
                    );
                })}
            </Select>
        </Form.Item>
    );
};

export const FormTimerItem = (item = {}, defaultValue = {}) => {
    const { required, validator, onChange, name, label, extra, disabled, others = {} } = item;
    const rules = validator ? [{ validator }] : [{ type: 'object', required, message: `请输入${label}` }];
    const onChangeFun = onChange || noFun;
    return (
        <Form.Item
            key={name}
            name={name}
            label={label}
            extra={extra}
            initialValue={defaultValue[name] ? moment(defaultValue[name]) : null}
            rules={rules}
            {...others}
        >
            <DatePicker
                className="date_picker_style"
                disabled={disabled}
                onChange={(value, timer) => onChangeFun(value, timer, item)}
                format={Format}
            />
        </Form.Item>
    );
};

export const FormRangePckerItem = (item = {}, defaultValue = {}) => {
    const { required, validator, onChange, name, label, extra, disabled, others = {} } = item;
    let rules = validator ? [{ validator }] : [{ required, message: `请输入${label}` }];
    rules = required ? rules : [];
    const onChangeFun = onChange || noFun;
    return (
        <Form.Item
            key={name}
            name={name}
            label={label}
            extra={extra}
            initialValue={defaultValue[name] ? moment(defaultValue[name]) : null}
            rules={rules}
            {...others}
        >
            <RangePicker
                className="date_picker_style"
                disabled={disabled}
                onChange={(value, timer) => onChangeFun(value, timer, item)}
                format={Format}
            />
        </Form.Item>
    );
};

export const FormTextAreaItem = (item = {}, defaultValue = {}) => {
    const { required, validator, onChange, placeholder, name, label, onBlurFun, extra, disabled, others = {} } = item;
    const placeholderStr = placeholder || `请输入${label}`;
    const onChangeFun = onChange || noFun;
    const rules = validator ? [{ validator }] : [{ required, message: `请输入${label}` }];
    return (
        <Form.Item
            key={name}
            label={label}
            name={name}
            required={required}
            initialValue={defaultValue[name]}
            extra={extra}
            rules={rules}
            {...others}
        >
            <TextArea
                disabled={disabled}
                onBlur={onBlurFun}
                onChange={onChangeFun}
                placeholder={placeholderStr}
                rows={4}
            />
        </Form.Item>
    );
};

export const FormRadioItem = (item = {}, defaultValue = {}) => {
    const { required, validator, onChange, name, label, extra, disabled, others = {}, arr = [] } = item;
    const onChangeFun = onChange || noFun;
    const rules = validator ? [{ validator }] : [{ required, message: `请输入${label}` }];
    return (
        <Form.Item
            key={name}
            label={label}
            name={name}
            required={required}
            initialValue={defaultValue[name]}
            extra={extra}
            rules={rules}
            {...others}
        >
            <Radio.Group disabled={disabled} onChange={onChangeFun}>
                {arr.map((it, index) => {
                    return <Radio key={`${index}_radio`} value={it.value}>{it.label}</Radio>;
                })}
            </Radio.Group>
        </Form.Item>
    );
};

export const FormFileItem = (item = {}, defaultValue = {}) => {
    const { required, name, label, url, extra, validator, onChange, beforeUpload, normFile, others = {} } = item;
    const rules = validator ? [{ validator }] : [{ required, message: `请上传${label}` }];
    const onChangeFun = onChange || noFun;
    const normFileFun = normFile || noFun;
    const beforeUploadFun = beforeUpload || noFun;
    const tokenStr = localStorage.getItem('token');
    const token = tokenStr ? JSON.parse(tokenStr)?.token : '';
    return (
        <Form.Item
            key={name}
            label={label}
            name={name}
            required={required}
            initialValue={defaultValue[name] || []}
            extra={extra}
            rules={rules}
            valuePropName="fileList"
            getValueFromEvent={normFileFun}
            {...others}
        >
            <Upload
                name="file"
                action={url}
                listType="picture"
                beforeUpload={beforeUploadFun}
                onChange={onChangeFun}
                headers={{
                    token,
                }}
            >
                <Button className="add_file_btn">
                    <CloudUploadOutlined /> 上传
                </Button>
            </Upload>
        </Form.Item>
    );
};

export const GroupInputItem = (...params) => {
    const [leftSelectValue, optionArr, leftValue, onSelectChange, onInputChange] = params;
    return (
        <Group compact className="form_option1">
            <Select
                value={leftSelectValue}
                placeholder="请选择..."
                onChange={onSelectChange}
                className="form_option1_left"
            >
                {optionArr.map((item, index) => {
                    return (
                        <Option key={`option_left_${index}`} value={item.name}>
                            {item.label}
                        </Option>
                    );
                })}
            </Select>
            <Input
                className="form_option1_right"
                value={leftValue}
                style={{ width: 200 }}
                onChange={onInputChange}
                allowClear
                placeholder="请输入..."
            />
        </Group>
    );
};

export const FormTreeSelectItem = (item = {}, defaultValue = {}) => {
    const {
        required,
        validator,
        onChange,
        placeholder,
        name,
        label,
        multiple = false,
        arr = [],
        extra,
        others = {},
    } = item;
    const placeholderStr = placeholder || `请选择${label}`;
    const onChangeFun = onChange || noFun;
    const rules = validator ? [{ validator }] : [{ required, message: `请选择${label}` }];
    const renderChildren = (arrData = []) => {
        return arrData.map((it) => {
            return (
                <TreeNode key={it.id} value={it.id} title={it.name}>
                   {it.children && Array.isArray(it.children) && renderChildren(it.children)}
                </TreeNode>
            );
        });
     };
    return (
        <Form.Item
            key={name}
            name={name}
            label={label}
            extra={extra}
            initialValue={defaultValue[name]}
            rules={rules}
            {...others}
        >
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder={placeholderStr}
                allowClear
                treeDefaultExpandAll
                onChange={onChangeFun}
                multiple={multiple}
            >
                {arr.map((it) => {
                    return (
                        <TreeNode key={it.id} value={it.id} title={it.name}>
                            {it.children && Array.isArray(it.children) && renderChildren(it.children)}
                        </TreeNode>
                    );
                })}
            </TreeSelect>
        </Form.Item>
    );
};
