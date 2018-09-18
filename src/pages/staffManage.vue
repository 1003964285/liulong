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
		    	<template slot-scope="scope"><span style="color:#1890FF;cursor:pointer" @click="">{{scope.row.num1}}</span></template>
		    </el-table-column>
		    <el-table-column prop="activeType" label="实际签到人数"  align='center'>
		    	<!--<template slot-scope="scope">{{scope.row.num2?getVal(scope.row.num2):"--"}}</template>-->
		    	<template slot-scope="scope"><span style="color:#1890FF;cursor:pointer" @click="">{{scope.row.num2}}</span></template>
		    </el-table-column>
		    <el-table-column prop="donate" label="状态"  align='center'></el-table-column>
		    <el-table-column prop="activeType" label="操作"  align='center'>
		    	<template slot-scope="scope">
						<div class="btnSmall" @click="del">移除</div>		    	
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
		
		
	</div>
</template>
<style type="text/css">
	
</style>
<script>
	import {
		getVal,
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
        status:[
        	{label:'1',value:"1"},
        	{label:'2',value:"2"},
        ],
        
      };
    },
    created(){
    },
    methods: {
    	del(){
    		console.log(getVal("ss"))
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
			//得到状态值对应的值
//			getVal(a){
//				console.log(a)
//				return 'sss';
//			},
    },
    
  }
</script>
<style scoped lang="scss">
@import url("../styles/public.css");
	
</style>