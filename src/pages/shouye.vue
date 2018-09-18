<template>
	<div style="height: 100%;position: relative">
		<div id="left">
			<img class="logo" src="../assets/logo.png"/>
			<div class="item" :class={check:item.check} v-for="item in leftData" @click="redirect(item)"><i class="iconfont" :class="item.icon"></i>&nbsp&nbsp{{item.name}}</div>
		</div>
		<div id="right">
			<div id="head">
				<div class="headLeft">赳赳智慧科技有限公司</div>
				<div class="headright"><i class="iconfont icon-guanji"></i>&nbsp&nbsp退出登录</div>
				<div class="headright"><i class="iconfont icon-42"></i>&nbsp&nbsp修改密码</div>

			</div>
			<transition mode="out-in" name='fade'>
				<rili v-if="leftData[0].check"></rili>
				<jilu v-if="leftData[1].check"></jilu>
				<staffManage v-if="leftData[2].check"></staffManage>
			</transition>

		</div>
	</div>

</template>
<style type="text/css">

</style>
<script>
	import rili from '@/pages/rili.vue';
	import jilu from '@/pages/jilu.vue';
	import staffManage from '@/pages/staffManage.vue';
  export default {
    data() {
      return {
        leftData:[
        	{name:'课程表',icon:"icon-rili",check:false},
        	{name:'授课记录',icon:"icon-xuexishuben",check:false},
        	{name:'员工管理',icon:"icon-yuangongzhanghaoguanli",check:true},
        ]
      };
    },
    components: {
			rili,jilu,staffManage,
		},
    created(){

    },
    methods: {
    	redirect(item){
    		for(let i=0;i<this.leftData.length;i++){
					this.leftData[i].check = false;
				}
				item.check = true;
    	},
    },

  }
</script>
<style scoped lang="scss">
@import url("../assets/font/iconfont.css");
@import url("../styles/animate.css");
	#left{
		position:absolute;
		left:0;
		top:0;
		width:15%;
		background:rgba(255,255,255,1);
		/*box-shadow:1px 0px 0px 0px rgba(223,226,229,1);*/
		height:98%;
		color:rgba(0,0,0,0.45);
	}
	.logo{
		width:100%;
		border-bottom:1.5px solid rgba(223,226,229,1) ;
	}
	.item{
		padding:10px 0 10px 20px;
		font-size: 14px;
		cursor:pointer
	}
	.item:hover{
		color:#1890FF;
	}
	.check{
		color:#1890FF;
	}


	#right{
		width:84.6%;
		position:relative;
		left:15.4%;
		top:0;
		font-family:PingFangSC-Regular;
		color:rgba(0,0,0,0.65);
	}
	#head{
		line-height:64px;
		height:64px;
		padding:0 20px;
		background:rgba(255,255,255,1);
		font-size: 16px;
	}
	.headLeft{
		float:left;
	}
	.headright{
		float:right;
		margin-left: 30px;
	}


	.iconfont{
		font-size:16px;
	}


/*页面切换过渡动画*/
	.fade-enter-active, .fade-leave-active {
  transition: opacity .25s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
