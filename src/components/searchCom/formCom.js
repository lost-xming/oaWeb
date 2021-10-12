import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {
	FormInputItem,
	FormInputItem2,
    FormSelectItem,
	FormTimerItem,
	FormHHTimerItem,
    FormTextAreaItem,
    FormFileItem,
	FormRadioItem,
	FormTreeSelectItem,
	FormRadioGroupItem,
	FormRadioColorItem,
	FormTreeSelectNodeItem,
} from '../formItem';
import './index.less';

class SearchCom extends Component {
	static propTypes = {
	    searchArr: Proptypes.array,
	    defaultValue: Proptypes.object,
	};

	static defaultProps = {
	    searchArr: [],
	    defaultValue: {},
	};

	_renderItem() {
	    const { searchArr, defaultValue } = this.props;
	    return searchArr.map(item => {
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
				case 'hsTimer':
					return FormHHTimerItem(item, defaultValue);
	            case 'textArea':
	                return FormTextAreaItem(item, defaultValue);
	            case 'file':
	                return FormFileItem(item, defaultValue);
	            case 'radio':
					return FormRadioItem(item, defaultValue);
				case 'radioGroup':
					return FormRadioGroupItem(item, defaultValue);
				case 'radioColor':
					return FormRadioColorItem(item, defaultValue);
				case 'treeSelect':
					return FormTreeSelectItem(item, defaultValue);
				case 'treeSelectNode':
					return FormTreeSelectNodeItem(item, defaultValue);
	            default:
	                return null;
	        }
	    });
	}

	render() {
	    return (
	        <div className="form_com">
	            {this._renderItem()}
	        </div>
	    );
	}
}

export default SearchCom;
