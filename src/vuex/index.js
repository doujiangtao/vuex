import Vue from 'vue';
import Vuex from 'vuex';

//注册vuex
Vue.use(Vuex);

//
const state={
	userinfo:JSON.parse(localStorage.getItem('userinfo'))
}

console.log(state.userinfo)

const mutations ={
	//保存用户数据
	SAVE_USERINFO(staet,userinfo){
		localStorage.setItem('userinfo',JSON.stringify(userinfo));
		state.userinfo=userinfo;

	}

}

//创建仓库暴露出去

export default new Vuex.Store({
	state,
	mutations
})