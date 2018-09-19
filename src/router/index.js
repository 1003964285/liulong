import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//测试
const test = r => require.ensure([], () => r(require('@/pages/test')), 'test')
const shouye = r => require.ensure([], () => r(require('@/pages/shouye')), 'shouye')
const rili = r => require.ensure([], () => r(require('@/pages/rili')), 'rili')
const jilu = r => require.ensure([], () => r(require('@/pages/jilu')), 'jilu')
const zujian = r => require.ensure([], () => r(require('@/pages/zujian')), 'zujian')

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
		//组件页
		{path: 'zujian',name: 'zujian',component: zujian},
		
	]
})