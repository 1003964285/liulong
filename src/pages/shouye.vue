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
			<div class="content" id="content">
				<transition mode="out-in" name='fade'>
					<rili v-if="leftData[0].check"></rili>
					<list v-if="leftData[1].check"></list>
					<zujian v-if="leftData[2].check"></zujian>
				</transition>
			</div>
		</div>
	</div>

</template>
<style type="text/css">

</style>
<script>
	import rili from '@/pages/rili.vue';
	import list from '@/pages/list.vue';
	import zujian from '@/pages/zujian.vue';
  export default {
    data() {
      return {
        leftData:[
        	{name:'课程表',icon:"icon-rili",check:false},
        	{name:'列表',icon:"icon-xuexishuben",check:true},
        	{name:'组件',icon:"icon-yuangongzhanghaoguanli",check:false},
        ]
      };
    },
    components: {
			rili,list,zujian
		},
    created(){

    },
    mounted(){
    	//设置content部分的高度
    	var RightHeight = document.getElementById("right").offsetHeight;
    	var  content = document.getElementById('content');
    	content.style.height = RightHeight-74+"px";



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
		width:200px;
		background:rgba(255,255,255,1);
		height:100%;
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
		margin-left: 200px;
    font-family: PingFangSC-Regular;
    color: rgba(0, 0, 0, 0.65);
    height: 100%;
	}
	#head{
		line-height:54px;
		height:54px;
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
	.content{
		/*background: white;
		padding: 20px;*/
    border-radius: 2px;
    margin:10px 0 0 10px;
    overflow: hidden;
    overflow-y: scroll;
	}
	/*滚动条样式*/
	.content::-webkit-scrollbar {/*滚动条整体样式*/
	    width:10px;     /*高宽分别对应横竖滚动条的尺寸*/
	    height:4px;
	}
	.content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
	    /*border-radius: 5px;*/
	    /*-webkit-box-shadow: inset 0 0 5px gray;*/
	    background:gainsboro;
	}
	.content::-webkit-scrollbar-track {/*滚动条里面轨道*/
	    /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
	    border-radius: 0;
	    background:#f4f4f4;
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
