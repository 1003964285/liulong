<template>
	<div id="box">
		<img src="../assets/setPasswordbj.png" style="width:100%;height:99.7vh;"/>
		<div id="forgetBox">
			<div id="title">忘记密码</div>
			<div class="selectBox">
				<el-select class="select" v-model="aa" clearable placeholder="请选择">
					<el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				<el-input placeholder="11位手机号" v-model="input23"></i></el-input>
			</div>
			<div class="selectBox" style="position: relative;">
				<el-checkbox class="checkboxs" v-model="checkedType"></el-checkbox>
				<el-input @keyup.native="checked" placeholder="验证码" v-model="code"></i></el-input>
				<span class="getCode">获取验证码</span>
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
        aa:"",
        checkedType:false,
        status:[
        	{label:'+86',value:"+86"},
        	{label:'+852',value:"+852"},
        	{label:'+853',value:"+853"},
        	{label:'+886',value:"+886"},
        	{label:'+82',value:"+82"},
        	{label:'81',value:"+81"},
        	{label:'+1',value:'+1'},
        	{label:'+44',value:"+44"},
        	{label:'+65',value:"+65"},
        	{label:'+60',value:"+60"},
        	{label:'+66',value:"+66"},
        ],
        code:'',
      };
    },
    created(){
    	
    },
    methods: {
    	checked(){ 
    		this.code= this.code.replace(/[^\d]/g, "")
				this.code = this.code.slice(0,6)
    		this.checkedType = this.code.length==6?true:false;
    	},
    	
    	
    	//输入框内容即时验证,Reg(val,/[^a-z|\d]/g,'3')
			Reg(str,reg,num){
				str = str.replace(reg, "")
				str = str.slice(0,num)
				return str;
			},

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
	.select{
		width:120px;
	}
	.getCode{
		display:inline-block;
		margin-left:10px;
		width:127px;
		line-height:40px;
		text-align: center;
		font-size: 14px;
		background:rgba(255,255,255,1);
		border-radius:4px;
		border:1px solid rgba(217,217,217,1);
		padding:0 10px;
		cursor:pointer;
	}
	.getCode:hover{
		background:rgba(24,144,255,1);
		color:rgba(255,255,255,1);
	}
	.checkboxs{
		position: absolute;
    left: 200px;
    top:11px;
	}
</style>