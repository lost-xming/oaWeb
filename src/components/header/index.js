import React, { Fragment } from 'react';
import { Layout, Image, Row, Col, Badge, Menu, Modal } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	DownOutlined,
	LogoutOutlined,
	EditOutlined,
	ExclamationCircleOutlined,
} from '@ant-design/icons';
import Breadcrumb from '@/components/breadcrumb';
import imgbase from '../../images/image.png';
import { appRouters } from '../../router/router';
import { clearUserInfo } from '../../utils/localStorageSet';
// import { getStoreUserInfo } from '@/utils/index';
// import MessageList from '../messageList';
import './index.less';
// import HeaderImg from '../../images/login/logo.png';

const { SubMenu } = Menu;
const { Header } = Layout;
class HeaderCom extends React.Component {
	static propTypes = {
		collapsed: PropTypes.bool,
		loginOut: PropTypes.func,
		getMessageUnReadList: PropTypes.func,
		setCollapsed: PropTypes.func,
		history: PropTypes.object,
		location: PropTypes.object,
	};

	static defaultProps = {
		collapsed: false,
		loginOut: () => { },
		getMessageUnReadList: () => { },
		setCollapsed: () => { },
		location: {},
	};

	constructor(props) {
		super(props);
		this.state = {
			current: 'mail',
		};
	}

	async componentDidMount() {
		await this.initData();
	}

    componentWillUnmount() {
        this.setState = () => {};
    }

	initData = async () => {

	}

	toggle = () => {
		const { setCollapsed, collapsed } = this.props;
		setCollapsed(!collapsed);
	};

	loginOutFun = () => {
		const that = this;
		Modal.confirm({
			title: '提示',
			icon: <ExclamationCircleOutlined />,
			content: '确认退出登录？',
			okText: '确认',
			onOk: () => {
				clearUserInfo();
				that.props.history.push('/login');
			},
			cancelText: '取消',
		});
	}

	creatIcon = () => {
		const { collapsed } = this.props;
		return React.createElement(
			collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
			{
				className: 'trigger',
				onClick: this.toggle,
			},
		);
	};

	renderTitle = (value) => <span>{value}<DownOutlined className="submenu_icon" /></span>;

	_renderMenus() {
		const { current } = this.state;
		return (
			<Menu className="menu_list" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
				{appRouters.map((item) => {
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
		const { current } = this.state;
		const renderAdmin = (
			<div className="user_info">
				<Image
					className="user_img"
					width={40}
					preview={false}
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
				/>
				<span className="user_name">小明</span>
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
							<Menu.Item key="user2" onClick={this.loginOutFun}><LogoutOutlined className="user_icon" />退出登录</Menu.Item>
						</SubMenu>
					</Menu>
					<div className="home_title_right_tip">
						<span className="home_title_right_tip_text">待审批</span>
						<Badge count={10} overflowCount={99} />
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
					{/* { (pathname === '/' || pathname === '') ? this._renderHomeTitle() : <Breadcrumb key={pathname} />} */}
				</Header>
			</Fragment>
		);
	}
}

const mapState = (state = {}) => {
	return {
		collapsed: state.SiderStore.collapsed,
	};
};
const mapDispatch = (dispatch) => {
	return {
		setCollapsed: dispatch.SiderStore.setCollapsedAction,
		loginOut: dispatch.Common.loginOut,
		getMessageUnReadList: dispatch.Common.getMessageUnReadList,
	};
};
export default connect(mapState, mapDispatch)(withRouter(HeaderCom));
