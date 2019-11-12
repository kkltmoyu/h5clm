// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [{
            path: '/login',
            name: 'login',
            meta: {
                title: 'Login'
            },
            component: () => import('@/views/login/login.vue')
        } ,{
            path:'/main',
            name:'main',
            component: () => import('@/views/main/main.vue'),
            redirect: {
                name:'take-away'
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
                    meta: {
                       
                    },
                    component: () => import('@/views/main/orders/orders.vue'),
                },
                {
                    path: 'user-info',
                    title: '我的',
                    name: 'user-info',
                    component: () => import('@/views/main/user-info/user-info.vue'),
                    meta: {
                    }
                }
            ]
        }, {
            path: '/*',
            redirect: {
                name: 'login'
            },
        }
];

