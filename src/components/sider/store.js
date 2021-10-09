export default {
    state: {
        // 左侧导航 是否展开或者收起
        collapsed: false,
        breadcrumb: [],
    },
    reducers: {
        setBreadcrumb(state, data) {
            return { ...state, breadcrumb: data };
        },
        setCollapsed(state, data) {
            return { ...state, collapsed: data };
        },
    },
    effects: () => ({
        async setBreadcrumbAction(params) {
            this.setBreadcrumb(params);
        },
        async setCollapsedAction(params) {
            // state， 可获取组件state 值
            this.setCollapsed(params);
        },
    }),
};
