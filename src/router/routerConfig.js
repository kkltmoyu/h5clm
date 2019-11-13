export const appRouter = [{
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login'
    },
    component: () => import('@/views/login/login.vue')
}, {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    redirect: {
        name: 'take-away'
    },
    children: [{
            path: 'take-away',
            name: 'take-away',
            title: '外卖',
            meta: {

            },
            component: () => import('@/views/main/take-away/index.vue'),
            redirect: {
                name: 'take-away-main'
            },
            children: [{
                path: 'take-away-main',
                name: 'take-away-main',
                title: '外卖主页',
                meta: {

                },
                component: () => import('@/views/main/take-away/main/index.vue'),
            }]
        },
        {
            path: 'orders',
            name: 'orders',
            title: '订单',
            redirect: {
                name: 'orders-main'
            },
            meta: {

            },
            component: () => import('@/views/main/orders/index.vue'),
            children: [{
                path: 'orders-main',
                name: 'orders-main',
                title: '订单主页',
                meta: {

                },
                component: () => import('@/views/main/orders/main/index.vue'),
            }, {
                path: 'order-detail',
                name: 'order-detail',
                title: '订单详情',
                meta: {

                },
                component: () => import('@/views/main/orders/order-detail/order-detail.vue'),
            }]
        },
        {
            path: 'user-info',
            title: '我的',
            name: 'user-info',
            component: () => import('@/views/main/user-info/user-info.vue'),
            meta: {}
        }
    ]

}, {
    path: '/*',
    redirect: {
        name: 'login'
    },
}];