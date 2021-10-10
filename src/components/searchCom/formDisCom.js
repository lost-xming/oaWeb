import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {
	FormDesInputItem,
	FormInputItem2,
    FormDesSelectItem,
	FormTimerItem,
	FormDesHHTimerItem,
    FormDesTextAreaItem,
    FormDesFileItem,
	FormRadioItem,
	FormTreeSelectItem,
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
					return FormDesInputItem(item, defaultValue);
				case 'password':
					return FormInputItem2(item, defaultValue);
	            case 'select':
	                return FormDesSelectItem(item, defaultValue);
	            case 'timer':
					return FormTimerItem(item, defaultValue);
				case 'hsTimer':
					return FormDesHHTimerItem(item, defaultValue);
	            case 'textArea':
	                return FormDesTextAreaItem(item, defaultValue);
	            case 'file':
	                return FormDesFileItem(item, defaultValue);
	            case 'radio':
					return FormRadioItem(item, defaultValue);
				case 'treeSelect':
					return FormTreeSelectItem(item, defaultValue);
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
