import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

/*引入自己写的路由配置*/
import routes from "@/router/routes";

const router = new VueRouter({
    /*将自己写的路由配置配置给VueRouter*/
    routes,
    /*配置路由的滚动行为*/
    scrollBehavior(to, from, savedPosition) {
        //return期望滚动到哪个的位置
        //这里配置是给所有路由的, 也可以通过meta来配置给单个路由
        return {y: 0}; //y:0 就是每次路由跳转都滚动到顶部
    }
});

router.afterEach((to, from) => {
    document.title = to.meta.title;
});

export default router;
