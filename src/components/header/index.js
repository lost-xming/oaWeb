import React, { Fragment } from 'react';
import { Layout, Image, Row, Col, Badge, Menu, Modal } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {
	DownOutlined,
	LogoutOutlined,
	EditOutlined,
	ExclamationCircleOutlined,
} from '@ant-design/icons';
import imgbase from '../../images/login/logo.png';
import { appRouters } from '../../router/router';
import { clearUserInfo, getUserInfo } from '../../utils/localStorageSet';
import './index.less';

const { SubMenu } = Menu;
const { Header } = Layout;
class HeaderCom extends React.Component {
	static propTypes = {
		loginOut: PropTypes.func,
		history: PropTypes.object,
		location: PropTypes.object,
		taskList: PropTypes.array,
	};

	static defaultProps = {
		loginOut: () => { },
		location: {},
		history: {},
		taskList: [],
	};

	constructor(props) {
		super(props);
		this.state = {
			current: 'mail',
			num: 0,
		};
	}

	async componentDidMount() {
		await this.initData();
	}

    componentWillUnmount() {
        this.setState = () => {};
    }

	initData = async () => {
		const { taskList } = this.props;
		const oaUserInfo = getUserInfo();
		const newData = taskList.filter((item) => {
			// 待处理
			return (
				item.statusStep !== -1 &&
				item.process[item.statusStep].directorId === oaUserInfo.id
			);
		});
		this.setState({
			num: newData.length,
		});
	}

	loginOutFun = () => {
		const { history } = this.props;
		Modal.confirm({
			title: '提示',
			icon: <ExclamationCircleOutlined />,
			content: '确认退出登录？',
			okText: '确认',
			onOk: () => {
				clearUserInfo();
				history.push('/login');
			},
			cancelText: '取消',
		});
	}

	renderTitle = (value) => <span>{value}<DownOutlined className="submenu_icon" /></span>;

	_renderMenus() {
		const { current } = this.state;
		return (
			<Menu className="menu_list" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
				{appRouters.map((item) => {
					if (item.isNotShow) {
						return null;
					}
					if (!item.children || !item.children.length) {
						return (
							<Menu.Item className="menu_item" key={item.path}>
								<Link to={`${item.path}`}> {item.title} </Link>
							</Menu.Item>
						);
					}
					return (
						<SubMenu className="menu_item" key={item.path} title={this.renderTitle(item.title)}>
							{item.children.map((it) => {
								if (it.isNotShow) {
									return null;
								}
								return (
									<Menu.Item key={it.path}>
										<Link to={`${it.path}`}> {it.title} </Link>
									</Menu.Item>
								);
							})}
						</SubMenu>
					);
				})}
			</Menu>
		);
	}

	_renderHomeTitle() {
		const { current, num } = this.state;
		const oaUserInfo = getUserInfo();
		const renderAdmin = (
			<div className="user_info">
				<Image
					className="user_img"
					width={40}
					preview={false}
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
				/>
				<span className="user_name">{oaUserInfo.name}</span>
			</div>
		);
		return (
			<Row className="home_title">
				<Col span={6} className="home_title_left">
					<Image
						width={40}
						height={40}
						src="error"
						className="home_title_img"
						fallback={imgbase}
					/>
					<span className="home_title_text">蔡甸城投智能交通公司</span>
				</Col>
				<Col span={12}>
					{this._renderMenus()}
				</Col>
				<Col span={6} className="home_title_right">
				<Menu className="menu_list" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
						<SubMenu className="user_menu_item" key="user" title={renderAdmin}>
							<Menu.Item key="user1"><EditOutlined className="user_icon" />编辑资料</Menu.Item>
							<Menu.Item key="user2" onClick={this.loginOutFun}>
								<LogoutOutlined className="user_icon" />退出登录
							</Menu.Item>
						</SubMenu>
					</Menu>
					<div className="home_title_right_tip">
						<span className="home_title_right_tip_text">待审批</span>
						{ num ? <Badge count={num} overflowCount={99} /> : null }

					</div>
				</Col>
			</Row>
		);
	}

	render() {
		const { location, children } = this.props;
        const { pathname } = location;
		return (
			<Fragment>
				<Header className="site-layout-header">
					{this._renderHomeTitle() }
					{/* { (pathname === '/' || pathname === '') ?
					this._renderHomeTitle() : <Breadcrumb key={pathname} />} */}
				</Header>
			</Fragment>
		);
	}
}

const mapState = (state = {}) => {
	return {
		taskList: state.Common.taskList,
	};
};
const mapDispatch = (dispatch) => {
	return {
		loginOut: dispatch.Common.loginOut,
	};
};
export default connect(mapState, mapDispatch)(withRouter(HeaderCom));
