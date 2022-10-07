<template>
  <div>
    Home组件 <br>

    <van-button
        @click="getUserList"
        size="mini"
        type="info"
    >
      获取用户信息
    </van-button>
    <br> <br>
    <div>
      用户信息: {{userList}}
    </div>
    <br>
    <div>
      第一个用户信息: {{firstUser}}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {
    name: "index",
    computed: {
        ...mapState('home', ['userList']),
        ...mapGetters('home', ['firstUser'])
    },
    methods: {
        async getUserList() {
            try {
                await this.$store.dispatch('home/getUserList');
                this.$toast('获取用户列表成功');
            } catch (e) {
                this.$toast('获取用户列表失败');
            }
        }
    },
}
</script>

<style scoped>

</style>
