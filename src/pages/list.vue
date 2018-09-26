<template>
	<div>
		<div class="searchBox">
			<div class="searchList">
				<div class="searchTitle">项目名称/编号：</div>
				<el-input class="inputs"></el-input>
				<el-select class="select" v-model="searchData.openFlag" clearable placeholder="请选择">
					<el-option v-for="item in D.listType" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				
			</div>
			<div class="button danger">查询</div>
			<div class="button">导出</div>
		</div>
		<div class="tableBox">
			<el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#FAFAFA',color:'#333',fontSize:'16px'}">
				<el-table-column prop="code" label="课程编号"  align='center'></el-table-column>
		    <el-table-column prop="time" label="授课时间" align='center'></el-table-column>
		    <el-table-column prop="name" label="课程名称"  align='center'></el-table-column>
		    <el-table-column prop="type" label="状态"  align='center'>
		    	<template slot-scope="scope">{{scope.row.type?Ts.getVal(D.listType,scope.row.type):'--'}}</template>
		    </el-table-column>
		    <el-table-column prop="remark" label="备注"  align='center'>
		    	<template slot-scope="scope">
	    			<el-tooltip v-if='scope.row.remark' effect="dark" :content="scope.row.remark" placement="top">
				      <div class="detail">{{scope.row.remark}}</div>
				    </el-tooltip>
		    		<span v-else>--</span>
		    	</template>
		    </el-table-column>
		    <el-table-column label="操作"  align='center'>
		    	<template slot-scope="scope">
						<div class="btnSmall" >建议反馈</div>		    	
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
  export default {
    data() {
      return {
        searchData:{},
        tableData:[
	      	{code:'102',time:'2018.10.12 10:20:00',name:'瑜伽',type:'1',remark:'教练必须漂亮'},
	      	{code:'103',time:'2018.10.09 10:20:00',name:'健美',type:'3',remark:'教练要帅气有肌肉'},
	      	{code:'104',time:'2018.10.24 10:20:00',name:'野外探险',type:'2',remark:'教练必须专业知识丰富，有丰富的探险经验'},
	      	{code:'104',time:'2018.10.15 10:20:00',name:'团建',type:'4',remark:'老师要有影响力'},
	      ],
        total: 0,
      };
    },
    created(){
    	
    },
    methods: {
    
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
    },
    
  }
</script>
<style scoped lang="scss">
@import url("../styles/public.css");
	
</style>