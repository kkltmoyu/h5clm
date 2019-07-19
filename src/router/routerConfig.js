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
            children: [{
                    path: 'general-info',
                    icon: '',
                    name: 'general-info',
                    title: '平台概览',
                    meta: {
                        disabledSourceDropdown: false,
                    },
                    component: () => import('@/components/main/general-info/generalInfo.vue'),
                }, {
                    path: 'account-list',
                    icon: '',
                    name: 'account-list',
                    title: '账户列表',
                    meta: {
                        disabledSourceDropdown: false,
                    },
                    component: () => import('@/components/main/account-list/accountList.vue'),
                },
                {
                    path: 'account-detail',
                    title: '账户详情',
                    name: 'account_detail',
                    component: () => import('@/components/main/account-detail/accountDetail.vue'),
                    meta: {
                        disabledSourceDropdown: true,
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

