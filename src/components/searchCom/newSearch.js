import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Form, Button } from 'antd';
import * as Icon from '@ant-design/icons';
import {
    FormInputItem,
    FormSelectItem,
    FormTimerItem,
    FormTextAreaItem,
    FormFileItem,
	FormRangePckerItem,
} from '../formItem';
import { formItemLayout } from '../../utils/index';
import './index.less';

const ButtonGroup = Button.Group;
class SearchCom extends Component {
	static propTypes = {
	    defaultValue: Proptypes.object,
	    optionArr: Proptypes.array,
	    btns: Proptypes.array,
	    isHideSearch: Proptypes.bool,
	    onRef: Proptypes.func,
	    onSearch: Proptypes.func,
	    onBtnClick: Proptypes.func,
	};

	static defaultProps = {
	    optionArr: [],
	    defaultValue: {},
	    isHideSearch: false,
	    btns: [],
	    onRef: () => {},
	    onSearch: () => { },
	    onBtnClick: () => {},
	};

	constructor(props) {
	    super(props);
	    this.state = {};
	    this.formRef = React.createRef();
	}

	componentDidMount() {
	    const { onRef } = this.props;
	    onRef(this);
	}

	handleReset = () => {
		const { onSearch } = this.props;
		onSearch({});
		this.formRef?.current?.resetFields();
	}

	onFinish = (values) => {
	    const { onSearch } = this.props;
	    onSearch(values);
	}

	_renderNewItem() {
	    const { optionArr, defaultValue } = this.props;
	    return optionArr.map(item => {
	        const { type } = item;
	        switch (type) {
	            case 'input':
	                return FormInputItem(item, defaultValue);
	            case 'select':
	                return FormSelectItem(item, defaultValue);
	            case 'timer':
					return FormTimerItem(item, defaultValue);
				case 'rangePcker':
					return FormRangePckerItem(item, defaultValue);
	            case 'textArea':
	                return FormTextAreaItem(item, defaultValue);
	            case 'file':
	                return FormFileItem(item, defaultValue);
	            default:
	                return null;
	        }
	    });
	}

	_renderItem() {
	    const { isHideSearch } = this.props;
	    if (isHideSearch) {
	        return <div className="search_top_left" />;
	    }
		return (
			<Form
				ref={this.formRef}
				onFinish={this.onFinish}
				{...formItemLayout(8, 16)}
			>
				<div className="search_top_left">
					{this._renderNewItem()}
					<Button className="search_btn" htmlType="submit" type="primary">
						搜索
					</Button>
					<Button className="search_btn" onClick={this.handleReset}>
						重置
					</Button>
				</div>
			</Form>
	    );
	}

	_renderRightBtns() {
	    const { btns, onBtnClick } = this.props;
		return (
			<div className="btn_list">
				<ButtonGroup>
					{btns.map((item, index) => {
						const { type, isHide, disabled, label, name, icon } = item;
						return (
							!isHide && (
								<Button
									key={`btns_${index}`}
									type={type}
									disabled={disabled}
									icon={icon ? React.createElement(Icon[icon]) : null}
									onClick={() => onBtnClick(name)}
								>
									{label}
								</Button>
							)
						);
					})}
				</ButtonGroup>
			</div>
	    );
	}

	render() {
	    return (
	        <div className="search_com">
	            {this._renderItem()}
	            {this._renderRightBtns()}
	        </div>
	    );
	}
}

export default SearchCom;
