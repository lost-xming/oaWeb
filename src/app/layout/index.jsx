import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import HeaderCom from '../../components/header/index';
import FooterCom from '../../components/footer';
import './index.css';

const { Content } = Layout;
class LayoutCom extends Component {
    static propTypes = {
        setAddUserInfo: PropTypes.func,
        getUserProductList: PropTypes.func,
    };

    static defaultProps = {
        setAddUserInfo: () => {},
        getUserProductList: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            cerVisible: false,
            loading: false,
            siderRoute: [],
        };
    }

    componentDidMount() {}

    componentWillUnmount() {
        this.setState = () => false;
    }

    render() {
        const { children } = this.props;
        const { cerVisible, loading, siderRoute } = this.state;
        const hasLoading = !cerVisible && !loading;
        if (loading) {
            return null;
        }
        return (
            <Layout className="layout_box">
                {/* <Sider key={`silder_${loading ? 1 : 2}`} siderRoute={siderRoute} /> */}
                <Layout className="site-layout">
                    <HeaderCom />
                    <Content className="site-layout-content">
                        {hasLoading ? children : null}
                    </Content>
                    <FooterCom />
                </Layout>
            </Layout>
        );
    }
}
const mapState = () => {
    return {};
};
const mapDispatch = (dispatch) => {
    return {
        setAddUserInfo: dispatch.Common.setAddUserInfo,
        getUserProductList: dispatch.Common.getUserProductList,
    };
};

export default connect(mapState, mapDispatch)(withRouter(LayoutCom));
