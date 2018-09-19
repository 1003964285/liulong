<template>
  <div class="bodySet">
    <div class="title">
      <div class="titleBox">
        <div class="itemBox">
          <div class="titleColor">总课程</div>
          <h2>{{totalClassCount.totalClass}}课时</h2>
        </div>
        <div class="itemBox">
          <div class="titleColor">已结束</div>
          <h2>{{totalClassCount.endClass}}课时</h2>
        </div>
        <div class="itemBox">
          <div class="titleColor">已安排</div>
          <h2>{{ totalClassCount.planClass}}课时</h2>
        </div>
        <div class="itemBox" style="border:none">
          <div class="titleColor">剩余</div>
          <h2>{{ totalClassCount.leftClass }}课时</h2>
        </div>
      </div>
    </div>

    <div id="box">
      <div class="xiaoshou" @click="sales=true"><i class="iconfont icon-xiaoxi"></i>&nbsp&nbsp 需要续课，联系销售</div>
      <div id="showMonthBox">
        <span class="left" @click="up">上一月</span>
        <span class="left right" @click="next">下一月</span>
        <div class="showMonth">{{month}}</div>
      </div>
      <div id="weeksbox">
        <div class="weeks" v-for="item in week">{{item}}</div>
      </div>
      <div id="calendarBox">
        <div class="calendar" @click="isShow(item)" :class="{borderNone:!item.date,calendarSelected:item.course}"
             v-for="item in dates">
          <!--<div class="calendar"  v-for="item in calendar">-->
          <div class="dateBox" :class="{datasSelected:item.course}">{{item.date}}</div>
          <div class="textbox">
          	<span class="time">{{item.time}}</span><br/>
	          <span class="course">{{item.course}}</span><br/>
	          <span class="name">{{item.name}}</span>
          </div>

        </div>
      </div>
    </div>
    <!--弹框-->
    <div class="bj" v-if='show'>
      <div class="dialogBox">
        <div class="dialogTitle">
          <span>课程录入</span>
          <span style="cursor:pointer" @click="show=false">×</span>
        </div>
        <div class="courseBox">
          <div class="courseTitle">课程日期：{{this.Date.getMonth() + 1 + '月' + classes.date + '号'}}</div>
          <div style="border:1px solid rgba(228,228,228,1);padding:20px 20px 0 20px;border-top:none">
            <div class="listbox" v-for="(item,index) in classes.classes">
              课程时间:
              <el-time-select class="selects" v-model="item.time"
                              :picker-options="{start: '08:30',step: '00:30',end: '18:30'}"
                              placeholder=""></el-time-select>
              课程内容:
              <el-select class="selects" v-model="item.course" clearable placeholder="请选择">
                <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
              &nbsp&nbsp
              <i class="iconfont icon-shanchu" @click="deleteClass(index)"></i>
            </div>
          </div>
          <div class="addBox" @click="addClasses()"><span class="add">添加</span></div>
        </div>
        <div class="btnBox">
					<span>
						<span class="button" style="margin-left: 20px;" @click="show=false">取消</span>
						<span class="button danger" @click="saveClasses">保存</span>
					</span>
        </div>
      </div>
    </div>
    <div class="bj" v-if='sales'>
      <div class="dialogBox">
        <div class="dialogTitle">
          <span>续费课程</span>
          <span style="cursor:pointer" @click="sales=false">×</span>
        </div>
        <div class="courseBox">
          <div class="salesTitle">您的专属业务员</div>
          <div class="courseTitle">
            <img src="../assets/salesUser.png" style="margin:20px 20px 0 100px;"/>
            <div class="detailBox">
              <div class="detailList">姓名：陈俊</div>
              <div class="detailList">手机号：18890909890</div>
              <div class="detailList">邮箱：73883847747@qq.com</div>
            </div>
          </div>
        </div>
        <div class="imgbox">
          微信<br/>
          <img src="../assets/salesUser.png" style="margin-top:10px;"/>
        </div>
        <div class="imgbox">
          钉钉<br/>
          <img src="../assets/salesUser.png" style="margin-top:10px;"/>
        </div>
      </div>
    </div>


  </div>

</template>
<style type="text/css">
  .imgbox {
    display: inline-block;
    text-align: center;
    margin: 40px 0 20px 111px;
  }
</style>
<script>
  import {
    //获取课时汇总
    totalClass,
    //按月获取课时
    classByMonth,
    saveClasses
  } from "@/config/api.js";

  export default {
    data() {
      return {
        totalClassCount: {
          "id": "0", "totalClass": 0, "planClass": 0, "endClass": 0, "leftClass": 0
        },
        week: ['日', '一', '二', '三', '四', '五', '六'],
        res: [
        	{time:'19:50',course:'肩颈康复课',name:'刘龙',date:'4'},
        	{time:'19:50',course:'肩颈康复课',name:'刘龙',date:'16'},
        	{time:'19:50',course:'肩颈康复课',name:'刘龙',date:'21'},
        ],
        dates: [],
        Date: '',
        classes: {
        },
        month: '',
        show: false,
        sales: false,
        status: [
          {label: '1', value: "1"},
          {label: '2', value: "2"},
        ]
      };
    },
    created() {
      var dateq = new Date();
      dateq.setDate(1);
      this.Date = new Date();
      this.month = this.Date.getFullYear() + '年' + (this.Date.getMonth() + 1) + '月';
      this.createDate(this.Date);
    },
    methods: {
      async saveClasses(){
        try{
          let date = this.Date;
          date.setDate(this.classes.date);
          let request = {
            date: date,
            contents: this.classes.classes
          };
          let res = await saveClasses(request);
        }catch (e) {

        }

      },
      deleteClass(index) {
        this.classes.classes.splice(index, 1)
      },
      addClasses() {
        let myClass = {
          time: '08:30'
        };
        console.log(this.classes.classes);
        // this.classes.classes.push(myClass)
        this.$set(this.classes,'classes', myClass)
      },
      isShow(item) {
        if (item.date){
          this.show = true;
        }
        if (!item.classes){
          item.classes = []
        }
        this.classes = item;
      },
      createDate(date_) {
        this.dates = [];
        //判断当月的1号是周几
        date_.setDate(1);
        let s = date_.getDay();
        for (let i = 0; i < s; i++) {
          this.dates.push({});
        }
        //判断当月有多少天
        let year_ = date_.getFullYear();
        let month_ = date_.getMonth() + 1;
        let num = '';
        switch (month_) {
          case 2:
            if (year_ % 400 === 0 || (year_ % 4 === 0 && year_ % 100 !== 0)) {
              num = 29;
            } else {
              num = 28;
            }
            break;
          case 4:
          case 6:
          case 9:
          case 11:
            num = 30;
            break;
          default:
            num = 31;
        }
        for (let i = 0; i < num; i++) {
          let ss = i + 1;
          this.dates.push({'date': ss});
        }
        this.fill();
      },
      //把后台拿到的值填充到日历中
      fill() {
        for (let i = 0; i < this.dates.length; i++) {
          for (let j = 0; j < this.res.length; j++) {
            if (this.res[j].date == this.dates[i].date) {
              this.$set(this.dates[i], 'time', this.res[j].time);
              this.$set(this.dates[i], 'course', this.res[j].course);
              this.$set(this.dates[i], 'name', this.res[j].name);
              this.$set(this.dates[i], 'classes', this.res[j].classes);
            }
          }
        }
      },


      up() {
        this.res = [];
        let upMonth = this.Date.getMonth() - 1;
        this.Date.setMonth(upMonth);
        this.month = this.Date.getFullYear() + '年' + (this.Date.getMonth() + 1) + '月';
        this.createDate(this.Date);
        console.log(Date.parse(this.Date));
      },
      next() {
        this.res = [];
        let upMonth = this.Date.getMonth() + 1;
        this.Date.setMonth(upMonth);
        this.month = this.Date.getFullYear() + '年' + (this.Date.getMonth() + 1) + '月';
        this.createDate(this.Date)
      },
    },

  }
</script>
<style scoped lang="scss">
  @import url("../styles/public.css");

  .title {
    background: rgba(255, 255, 255, 1);
  }

  .titleBox {
    width: 1024px;
    border-radius: 4px 4px 0px 0px;
    margin: 0 auto;
    padding: 10px;
  }

  .itemBox {
    text-align: center;
    width: 247px;
    /*padding:10px;*/
    border-right: 0.5px solid rgba(0, 0, 0, 0.45);
    display: inline-block;
  }

  .titleColor {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }

  #box {
    padding: 20px;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    margin-top:10px;
    font-family: PingFangSC-Medium;
  }

  #weeksbox {
    width: 1024px;
    border-radius: 4px 4px 0px 0px;
    margin: 0 auto;
    margin-top:10px;
  }

  .weeks {
    line-height:40px;
    width: 146px;
    background: rgba(250, 250, 250, 1);
    display: inline-block;
    text-align: center;
  }

  #calendarBox {
    width: 1024px;
    border-radius: 4px 4px 0px 0px;
    margin: 0 auto;
    margin-top: 5px;
  }

  .calendar {
    overflow: hidden;
    display: inline-block;
    text-align: center;
    width: 147px;
    /*height: 128px;*/
    height: 104px;
    border: 1px solid #e3e3e3;
    padding: 10px;
    font-size: 13px;
    margin: -5px 0 0 -1px;
    position:relative;
  }
  .calendar:hover {
    background: rgba(230, 230, 230, 1);
  }
  .textbox{
  	width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .dateBox {
    width: 24px;
    line-height: 24px;
    background: #f1f0f0;
    border-radius: 50%;
    font-size: 10px;
  }

  .borderNone {
    border: none;
  }

  .time {
    line-height: 20px;
  }

  .course {
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.85);
  }

  .name {
    line-height: 20px;
    color: rgba(102, 102, 102, 0.85);
  }

  /*有课显示样式*/
  .datasSelected {
    background: rgba(249, 221, 137, 1);
  }

  .calendarSelected {
    background: rgba(248, 239, 239, 1);
  }

  #showMonthBox {
    width: 1024px;
    /*height:32px;
        border-radius:4px 4px 0px 0px;*/
    margin: 0 auto;
  }

  .left {
    float: left;
    width: 65px;
    line-height: 32px;
    border-radius: 4px;
    border: 1px solid rgba(217, 217, 217, 1);
    text-align: center;
    cursor: pointer;
  }

  .right {
    float: right;
  }

  .showMonth {
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    color: rgba(24, 144, 255, 1)
  }

  /*弹框样式*/
  .bj {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    z-index: 1000;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
  }

  .dialogBox {
    background: rgba(255, 255, 255, 1);
    min-width: 560px;
    min-height: 280px;
    height: auto;
    border-radius: 5px;
    max-height: 900px;
  }

  .dialogTitle {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    line-height: 50px;
    color: #000000;
    font-weight: bold;
    font-size: 20px;
  }

  .btnBox {
    background: rgba(240, 243, 248, 1);
    border-radius: 0px 0px 4px 4px;
    display: flex;
    justify-content: center;
  }

  .button {
    width: 116px;
    line-height: 36px;
    margin: 15px 0;
  }

  /*弹框样式结束*/
  @import url("../assets/font/iconfont.css");
  .courseBox {
    padding: 0 10px;
    font-size: 14px;
    color: rgba(102, 102, 102, 0.85);
    max-height: 629px;
    overflow: hidden;
    overflow-y: scroll;
  }

  .courseTitle {
    line-height: 50px;
    background: rgba(240, 243, 248, 1);
    /*margin: 0 10px;*/
    padding: 0 0 0 20px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(51, 51, 51, 0.85);
  }

  .listbox {
    margin: 0 0 20px 0;
  }

  .selects {
    width: 169px !important;
    height: 40px;
  }

  .addBox {
    display: flex;
    justify-content: center;
  }

  .add {
    width: 65px;
    line-height: 32px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(217, 217, 217, 1);
    text-align: center;
    margin: 10px 0;
  }

  .xiaoshou {
    width: 1042px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px dashed rgba(217, 217, 217, 1);
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 32px;
    margin: 0 auto;
    margin-bottom:10px;
    text-align: center;
    cursor: pointer;
  }

  .salesTitle {
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(102, 102, 102, 0.85);
    line-height: 32px;
  }

  .detailBox {
    display: inline-block;
    line-height: 40px;
    color: gray;
    font-size: 14px;
  }
</style>
