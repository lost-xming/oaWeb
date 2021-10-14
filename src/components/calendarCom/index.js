import React from 'react';
import PropType from 'prop-types';
import { Calendar, Badge, Select } from 'antd';
import { CalendarFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import moment from 'moment';
import './index.less';

class CalendarCom extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.initData();
    }

    componentWillUnmount() {
        this.setState = () => false;
    }

    initData = async () => {};

    getListData = (value) => {
        let listData;
        switch (value.date()) {
            case 3:
                listData = [
                    { type: 'success', content: '已请假' },
                ];
                break;
            case 5:
                listData = [
                    { type: 'error', content: '打卡异常' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'success', content: '已补卡' },
                ];
                break;
            default:
                listData = '正常';
                break;
        }
        return listData || [];
    };

    onCalenderSelect = (values) => {
        console.log(11, values.format('YYYY-MM-DD'), values.date());
    };

    // chineseNumber = () => {
    //     const num = new Date().getDate();
    //     const dateHash = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    //     let res = '';
    //     if (num <= 10) {
    //         res = `初${dateHash[num]}`;
    //     } else if (num > 10 && num < 20) {
    //         res = `十${dateHash[num - 10]}`;
    //     } else if (num == 20) {
    //         res = '二十';
    //     } else if (num > 20 && num < 30) {
    //         res = `廿${dateHash[num - 20]}`;
    //     } else if (num == 30) {
    //         res = '三十';
    //     }
    //     return res;
    // };

    dateCellRender(value) {
        let listData = this.getListData(value);
        const timer = moment(value).format('YYYY-MM-DD');
        const daysCounst = moment(timer, 'YYYY-MM-DD').fromNow();
        if (daysCounst.indexOf('后') > -1) {
            listData = '';
        }
        return (
            <ul className="events">
                {Array.isArray(listData) ? listData.map((item) => (
                    <li key={item.content} className="events_success">
                        <Badge status={item.type} text={item.content} />
                    </li>
                )) : <div className="events_success">{listData}</div>}
            </ul>
        );
    }

    render() {
        return (
            <Calendar
                className="home_right_top"
                dateCellRender={this.dateCellRender.bind(this)}
                onSelect={this.onCalenderSelect.bind(this)}
                headerRender={({ value, onChange }) => {
                    const start = 0;
                    const end = 12;
                    const monthOptions = [];
                    const current = value.clone();
                    const localeData = value.localeData();
                    const months = [];
                    for (let i = 0; i < 12; i++) {
                        current.month(i);
                        months.push(localeData.monthsShort(current));
                    }
                    for (let index = start; index < end; index++) {
                        monthOptions.unshift(
                            <Select.Option className="month-item" key={`${index}`}>
                                {months[index]}
                            </Select.Option>,
                        );
                    }
                    const month = value.month();
                    const year = value.year();
                    const options = [];
                    for (let i = year - 40; i <= moment().year(); i += 1) {
                        options.unshift(
                            <Select.Option key={i} value={i} className="year-item">
                                {i}年
                            </Select.Option>,
                        );
                    }
                    return (
                        <div className="calendar_top">
                            <div className="home_right_list_left">
                                <span className="calendar_top_left">
                                    <CalendarFilled className="calendar_top_left_icon" />
                                    {moment().format('dddd')}
                                </span>
                                <span>{moment().format('YYYY年MM月DD日')}</span>
                            </div>
                            <div>
                                <Select
                                    style={{ width: 100, marginRight: 10 }}
                                    dropdownMatchSelectWidth={false}
                                    onChange={(newYear) => {
                                        const now = value.clone().year(newYear);
                                        onChange(now);
                                    }}
                                    value={String(year)}>
                                    {options}
                                </Select>
                                <Select
                                    style={{ width: 100, marginRight: 10 }}
                                    dropdownMatchSelectWidth={false}
                                    value={String(month)}
                                    onChange={(selectedMonth) => {
                                        const newValue = value.clone();
                                        newValue.month(parseInt(selectedMonth, 10));
                                        onChange(newValue);
                                    }}>
                                    {monthOptions}
                                </Select>
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
}

const mapDispatch = (dispatch) => {
    return {};
};
const mapState = () => {
    return {};
};
export default connect(mapState, mapDispatch)(CalendarCom);
