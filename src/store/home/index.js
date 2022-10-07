import {reqUserList} from "@/api";

const state = {
    userList: []
}

const mutations = {
    GET_USER_LIST(state, userList) {
        state.userList = userList;
    }
}

const actions = {
    async getUserList({commit}) {
        let res = await reqUserList();
        if (res.code === 200) {
            commit('GET_USER_LIST', res.data.userList);
        }
    }
}

const getters = {
    /*返回第一个用户*/
    firstUser({userList}) {
        return userList[0] || {};
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
