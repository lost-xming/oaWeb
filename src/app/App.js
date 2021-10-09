import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasicRoute from '@/router/index';
// import { notHasAuthorityRouter } from '../router/router';

const { REACT_APP_PUBLIC_URL = '' } = process.env;
class App extends Component {
	static propTypes = {
		// getUserInfo: PropTypes.func,
	};

	static defaultProps = {
		// getUserInfo: () => {},
	};

	constructor(props) {
		super(props);
		this.state = {
			// loading: true,
		};
	}

	componentDidMount() {
		this.initUserInfo();
	}

	componentWillUnmount() {
        this.setState = () => false;
    }

	initUserInfo = async () => {

	};

	render() {
		return (
			<BrowserRouter basename={`${REACT_APP_PUBLIC_URL}`}>
				<BasicRoute />
			</BrowserRouter>
		);
	}
}
const mapState = () => {
	return {};
};
const mapDispatch = (dispatch) => {
	return {
		// getUserInfo: dispatch.loginCom.getUserInfo,
	};
};

export default connect(mapState, mapDispatch)(App);
