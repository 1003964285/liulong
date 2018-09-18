import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//测试
const test = r => require.ensure([], () => r(require('@/pages/test')), 'test')
const shouye = r => require.ensure([], () => r(require('@/pages/shouye')), 'shouye')
const rili = r => require.ensure([], () => r(require('@/pages/rili')), 'rili')
const jilu = r => require.ensure([], () => r(require('@/pages/jilu')), 'jilu')
const staffManage = r => require.ensure([], () => r(require('@/pages/staffManage')), 'staffManage')
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const forgetPassword = r => require.ensure([], () => r(require('@/pages/forgetPassword')), 'forgetPassword')
const setPassword = r => require.ensure([], () => r(require('@/pages/setPassword')), 'setPassword')

export default new Router({

	routes: [
		//测试
		{path: '/test',name: 'test',component: test},
		//首页
		{path: '/shouye',name: 'shouye',component: shouye},
		//日历
		{path: 'rili',name: 'rili',component: rili},
		//授课记录
		{path: 'jilu',name: 'jilu',component: jilu},
		//员工管理
		{path: 'staffManage',name: 'staffManage',component: staffManage},
		//登录页
		{path: '/login',name: 'login',component: login},
		//忘记密码
		{path: '/forgetPassword',name: 'forgetPassword',component: forgetPassword},
		//修改密码
		{path: '/setPassword',name: 'setPassword',component: setPassword},
	]
})