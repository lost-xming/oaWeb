import { connect } from 'react-redux';

const Authorized = (props) => {
    const { children, userInfo, authority, noMatch, login } = props;
    const userInfoData = {
        ...userInfo,
        ...JSON.parse(localStorage.getItem('oaUserInfo')),
    };
    const hasUserInfo = Object.keys(userInfoData).length;
    console.log(333, userInfoData);
    if (!hasUserInfo) {
        return login;
    }
    if (!authority) return children;
    const _authority = Array.isArray(authority) ? authority : [authority];
    if (_authority.includes(hasUserInfo)) return children;
    return noMatch;
};
const mapState = (state = {}) => {
    return {
        userInfo: state.Common.userInfo,
    };
};
export default connect(mapState)(Authorized);
