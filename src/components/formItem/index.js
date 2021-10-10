import React from 'react';
import { Input, Form, Select, DatePicker, Upload, Button, Radio, TreeSelect, Image } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import './index.css';

const { TextArea, Group } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TreeNode } = TreeSelect;
const noFun = () => { };
const Format = 'YYYY-MM-DD';
const Format2 = 'YYYY-MM-DD h:mm';
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
        suffix,
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
                allowClear
                onPressEnter={onEnterFun}
                style={style}
                suffix={suffix}
                maxLength={maxLength}
                className={className}
                onChange={onChangeFun}
                placeholder={placeholderStr}
            />
        </Form.Item>
    );
};
export const FormDesInputItem = (item = {}, defaultValue = {}) => {
    const {
        required,
        name,
        label,
    } = item;
    return (
        <Form.Item
            key={name}
            label={label}
            required={required}
            initialValue={defaultValue[name]}
        >
            {defaultValue[name]}
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

export const FormDesSelectItem = (item = {}, defaultValue = {}) => {
    const { required, name, label, arr, extra } = item;
    const valueArr = arr.filter(it => it.value === defaultValue[name]);
    return (
        <Form.Item
            key={name}
            label={label}
            extra={extra}
            initialValue={defaultValue[name]}
            required={required}
        >
            {(valueArr && valueArr.length) ? (valueArr[0].lab || valueArr[0].label) : ''}
        </Form.Item>
    );
};

export const FormTimerItem = (item = {}, defaultValue = {}) => {
    const { required, validator, onChange, name, showTime = false, label, extra, disabled, others = {} } = item;
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
                showTime={showTime}
                onChange={(value, timer) => onChangeFun(value, timer, item)}
                format={showTime ? Format2 : Format}
            />
        </Form.Item>
    );
};

export const FormHHTimerItem = (item = {}, defaultValue = {}) => {
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
                showTime
                onChange={(value, timer) => onChangeFun(value, timer, item)}
                format={Format2}
            />
        </Form.Item>
    );
};

export const FormDesHHTimerItem = (item = {}, defaultValue = {}) => {
    const { required, name, label, extra } = item;
    return (
        <Form.Item
            key={name}
            label={label}
            extra={extra}
            initialValue={defaultValue[name] ? moment(defaultValue[name]) : null}
            required={required}
        >
            { defaultValue[name] }
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
                autoSize={{ minRows: 2, maxRows: 6 }}
                maxLength={200}
                showCount
                rows={4}
            />
        </Form.Item>
    );
};

export const FormDesTextAreaItem = (item = {}, defaultValue = {}) => {
    const { required, name, label, extra } = item;
    return (
        <Form.Item
            key={name}
            label={label}
            required={required}
            initialValue={defaultValue[name]}
            extra={extra}
        >
            {defaultValue[name]}
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
    const {
        required,
        name,
        label,
        disabled,
        url,
        extra,
        validator,
        onChange,
        beforeUpload,
        normFile,
        others = {} } = item;
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
                disabled={disabled}
                listType="picture"
                beforeUpload={beforeUploadFun}
                onChange={onChangeFun}
                headers={{
                    token,
                }}
            >
                <Button disabled={disabled} className="add_file_btn">
                    <CloudUploadOutlined /> 上传
                </Button>
            </Upload>
        </Form.Item>
    );
};

export const FormDesFileItem = (item = {}, defaultValue = {}) => {
    const {
        required,
        name,
        label,
        extra,
    } = item;
    const imgs = defaultValue[name] ? defaultValue[name] : [];
    return (
        <Form.Item
            key={name}
            label={label}
            required={required}
            initialValue={defaultValue[name] || []}
            extra={extra}
        >
            <Image.PreviewGroup>
                {imgs.map((it, index) => {
                    return <Image key={`${index}_img`} width={50} src={it} />;
                })}
            </Image.PreviewGroup>
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
