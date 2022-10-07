export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home'),
        meta: {isAuth: false, title: '主页'},
    }
]
