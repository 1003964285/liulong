<template>
	<div>
		<div class="tableBox">
			<div class="searchList">
				<div class="searchTitle">项目名称/编号：</div>
				<el-input class="inputs"></el-input>
				<el-select class="select" v-model="searchData.openFlag" clearable placeholder="请选择">
					<el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				<el-select class="select" v-model="searchData.openFlag" clearable placeholder="请选择">
					<el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				<el-select class="select" v-model="searchData.openFlag" clearable placeholder="请选择">
					<el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				
			</div>
			<div class="button danger">查询</div>
			<div class="button">导出</div>
			<el-table :data="tableData" stripe style="width: 100%" :header-row-style="thStyle()">
				<el-table-column prop="name" label="课程编号"  align='center'></el-table-column>
		    <el-table-column prop="phone" label="授课时间" align='center'></el-table-column>
		    <el-table-column prop="activeName" label="课程名称"  align='center'></el-table-column>
		    <el-table-column prop="donate" label="教练昵称"  align='center'></el-table-column>
		    <el-table-column prop="activeType" label="报名人数"  align='center'>
		    	<template slot-scope="scope"><span style="color:#1890FF;cursor:pointer" @click="applyShow">{{scope.row.num1}}</span></template>
		    	<!--<template slot-scope="scope">{{scope.row.num1?getVal():"=="}}</span></template>-->
		    </el-table-column>
		    <el-table-column prop="activeType" label="实际签到人数"  align='center'>
		    	<!--<template slot-scope="scope">{{scope.row.num2?getVal(status,scope.row.num2):"--"}}</template>-->
		    	<template slot-scope="scope"><span style="color:#1890FF;cursor:pointer" @click="sign">{{scope.row.num2}}</span></template>
		    </el-table-column>
		    <el-table-column prop="donate" label="状态"  align='center'></el-table-column>
		    <el-table-column prop="activeType" label="操作"  align='center'>
		    	<template slot-scope="scope">
						<div class="btnSmall" @click="advice">建议反馈</div>		    	
		    	</template>
		    </el-table-column>
			</el-table>
			<div class="pageBox">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="searchData.pageNo"
			      :page-sizes="[30,40,60,100]"
			      :page-size="searchData.pageSize"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="total">
			    </el-pagination>
			</div>
		</div>
		
		<!--报名弹框-->
		<div class="bj" v-if='show'>
			<div class="dialogBox" >
				<div class="dialogTitle">
					<span>报名人员</span>
					<span style="cursor:pointer" @click="show=false">×</span>
				</div>
				<div class="courseBox">
					<div class="courseTitle">课程内容：女性塑造 </div>
					<div class="content">
						<span class="contentLeft">课程时间：8月5日 13:00</span>
						<span class="contentLeft">课程教练：陈俊</span>
					</div>
					<div class="listTitle">报名人员：25位</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
				</div>
			</div>
		</div>
		
		<!--签到弹框-->
		<div class="bj" v-if='signShow'>
			<div class="dialogBox" >
				<div class="dialogTitle">
					<span>签到人员</span>
					<span style="cursor:pointer" @click="signShow=false">×</span>
				</div>
				<div class="courseBox">
					<div class="courseTitle">课程内容：女性塑造 </div>
					<div class="content">
						<span class="contentLeft">课程时间：8月5日 13:00</span>
						<span class="contentLeft">课程教练：陈俊</span>
					</div>
					<div class="listTitle">签到人员：25位</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
					<div class="item">
						<img src="../assets/salesUser.png"/><br />
						小明
					</div>
				</div>
			</div>
		</div>
		
		<!--建议弹框-->
		<div class="bj" v-if='adviceShow'>
			<div class="dialogBox" >
				<div class="dialogTitle">
					<span>意见反馈</span>
					<span style="cursor:pointer" @click="adviceShow=false">×</span>
				</div>
				<div class="courseBox">
					<div class="courseTitle">课程内容：女性塑造 </div>
					<div class="content">
						<span class="contentLeft">课程时间：8月5日 13:00</span>
						<span class="contentLeft">课程教练：陈俊</span>
					</div>
					<div class="adviceTitle">请选择类型：</div>
					<div class="adviceItem" :class="{selects:item.checked}" v-for="item in adviceList">
						<span style="width:100px;">{{item.name}}</span>
						<el-checkbox class="check" v-model="item.checked"></el-checkbox>
					</div>
					<div class="adviceTitle">请描述您的意见：</div>
					<el-input
					  type="textarea"
					  :rows="2"
					  placeholder="请输入内容"
					  v-model="textareaVal">
					</el-input>
				</div>
				<div class="btnBox">
					<span>
						<span class="button buttons" style="margin-left: 20px;" @click="show=false">取消</span>
						<span class="button buttons danger">保存</span>
					</span>
				</div>
			</div>
		</div>
		
		
	</div>
</template>
<style type="text/css">
	
</style>
<script>
	import {
		uploadImg
	} from '@/config/tools';
  export default {
    data() {
      return {
        searchData:{},
        tableData:[
        	{num1:"12",num2:"34",},
        	{num1:"12",num2:"34",},
        	{num1:"12",num2:"34",},
        ],
        total: 0,
        
        
        show:false,
        signShow:false,
        adviceShow:false,
        status:[
        	{label:'1',value:"1"},
        	{label:'2',value:"2"},
        ],
        adviceList:[
        	{name:"教练问题",checked:false},
        	{name:"教练问题",checked:true},
        	{name:"教练问题",checked:false},
        	{name:"教练问题",checked:true},
        ],
        textareaVal:'',
        
      };
    },
    created(){
    	
    },
    methods: {
    	//报名人数点击
    	applyShow(){
    		this.show = true;
//  		console.log(uploadImg("10"))
//  		console.log(Ts.getVal())
    	},
    	//签到人数点击
    	sign(){
    		this.signShow = true;
    	},
    	//点击建议反馈
    	advice(){
    		this.adviceShow = true;
    	},
    		
			

    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	//每页条数改变时调用
			handleSizeChange(val) {
        this.searchData.pageSize = val;
        this.search();
	    },
	    //页码发生改变时调用
	    handleCurrentChange(val) {
        this.searchData.pageNo = val;
        this.search();
	    },
	    //表头样式
			thStyle() {
				return {
					color: "#333",
					fontSize: "16px",
				}
			},
    },
    
  }
</script>
<style scoped lang="scss">
@import url("../styles/public.css");
		/*弹框样式*/
	.bj{
		position:fixed;
		left:0;
		top:0;
		bottom: 0;
		right: 0;
		display:flex;
		z-index: 1000;
		justify-content:center;
		align-items:center;
		background:rgba(0,0,0,0.3);
	}
	.dialogBox{
		background:rgba(255,255,255,1);
		min-width:560px;
		min-height:280px;
		height: auto;
		border-radius:5px;
	}
	.dialogTitle{
		display:flex;
		justify-content: space-between;
		margin: 0 20px;
		line-height:50px;
		color:#000000;
		font-weight:bold;
		font-size:20px;
	}
	.btnBox{
		background:rgba(240,243,248,1);
		border-radius:0px 0px 4px 4px;
		display: flex;
		justify-content:center;
		margin:20px 0 0 0;
	}
	.buttons{
		width:116px;
		line-height:36px;
		margin:15px 0;
	}
	/*弹框样式结束*/
	.courseTitle{
		line-height:50px;
		background:rgba(240,243,248,1);
		/*margin: 0 10px;*/
		padding:0 0 0 20px;
		font-size:16px;
		font-weight:bold;
		color:rgba(51,51,51,0.85);
	}
	.courseBox{
		width:534px;
		margin:0 20px;
	}
	.content{
		border:1px solid rgba(228,228,228,1);
		padding:0 20px;
		border-top:none;
		display: flex;
		justify-content: space-between;
		line-height:50px;
	}
	.listTitle{
		font-size:16px;
		font-weight:bold;
		color:rgba(2,2,2,0.85);
		line-height:66px;
	}
	.item{
		display: inline-block;
		text-align: center;
		margin:0 9px 20px 9px;
		img{
			width:54px;
		};
	}
	.adviceTitle{
		margin-top:30px;
		font-size:14px;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(102,102,102,0.85);
		line-height:36px;
	}
	.adviceItem{
		font-size:14px;
		font-weight:400;
		color:rgba(0,0,0,0.25);
		line-height:32px;
		width:166px;
		border-radius:4px;
		border:1px solid rgba(0,0,0,0.15);
		padding:0 20px;
		display: inline-block;
		margin: 8px 6px;
	}
	.selects{
		background:rgba(127,143,164,1);
		color:rgba(255,255,255,1);
	}
	.check{
		margin:0 0 0 49px;
	}
</style>