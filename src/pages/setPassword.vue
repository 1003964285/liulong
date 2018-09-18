<template>
	<div id="box">
		<img src="../assets/setPasswordbj.png" style="width:100%;height:99.7vh;"/>
		<div id="forgetBox">
			<div id="title">修改密码</div>
			<div class="inputBox">
				<el-input placeholder="旧密码" v-model="input23" type="password"></i></el-input>
			</div>
			<div class="inputBox">
				<el-input placeholder="新密码" v-model="input23" type="password"></i></el-input>
			</div>
			<div class="inputBox">
				<el-input placeholder="确认密码" v-model="input23" type="password"></i></el-input>
			</div>
			<div class="selectBox">
				<div class="login">登  录</div>
				<div class="login cancel">取消</div>
			</div>
			
		</div>
	</div>
  
 

</template>
<script>
  export default {
    data() {
      return {
        input23:"",
      };
    },
    created(){
    	
    },
    methods: {

    },
    
  }
</script>
<style scoped lang="scss">
@import url("../assets/font/iconfont.css");
	#box{
		position:relative;
	}
	#forgetBox{
		position:absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}
	#title{
		font-size:18px;
		color:rgba(0,0,0,1);
		font-weight: bold;
		line-height:100px;
	}
	.inputBox{
		position: relative;
		margin: 20px 0;
	}
	.icon{
		position: absolute;
    z-index: 100;
    top: 10px;
    left: 10px;
	}
	.selectBox{
		display: flex;
		justify-content:space-between;
		font-size:14px;
		margin: 20px 0;
	}
	.login{
		width:160px;
		line-height:40px;
		background:rgba(24,144,255,1);
		border-radius:4px;
		text-align: center;
		font-size:16px;
		color:rgba(255,255,255,1);
		margin-top:20px;
		cursor:pointer;
	}
	.cancel{
		border-radius:4px;
		border:1px solid rgba(217,217,217,1);
		color:rgba(102,102,102,1);
		background:none;
		margin-left:20px;
	}
	
	
</style>