const app = {
    state: {
        cachePage: ['generalInfo', 'accountList'],
        currentSource: {
            title: '全部账户',
            value: 'ALL',
        },
    },
    mutations: {
        setCurrentSource(state, source) {
            state.currentSource = source;
        },
    }
};

export default app;
