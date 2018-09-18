<template>
  <div id="box">
    <img src="../assets/bj.png" style="width:100%;height:99.7vh;"/>
    <div id="loginBox">
      <div id="title">账号密码登录</div>
      <div class="inputBox">
        <i class="iconfont icon-yonghu icon"></i>
        <el-input placeholder="账户" v-model="form.username"><i slot="prefix" class="el-input__icon"></i></el-input>
      </div>
      <div class="inputBox">
        <i class="iconfont icon-42 icon"></i>
        <el-input placeholder="密码" v-model="form.password" type="password"><i slot="prefix" class="el-input__icon"></i>
        </el-input>
      </div>
      <div class="selectBox">
        <el-checkbox v-model="checked">自动登录</el-checkbox>
        <span style="color:#1890FF;cursor:pointer;" @click="forget">忘记密码</span>
      </div>
      <div class="login" @click="logins">登 录</div>
      <div class="login service">联系客服</div>
    </div>
  </div>


</template>
<script>
  import axios from 'axios';
  import Qs from 'qs';
  import {mapState, mapMutations} from 'vuex'
  import {
    login//登录
  } from "@/config/api.js";

  export default {
    data() {
      return {
        input23: "",
        form: {
          username: 'pi22g',
          password: '12345622',
        },
        checked: false,
      };
    },
    created() {

    },
    methods: {
      ...mapMutations(['storeUser']),
      forget() {
        this.$router.push({path: '/forgetPassword'})
      },
      //用于生成uuid
      S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      },
      guid() {
        return (this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4() + "-" + this.S4());
      },
      loginSuccess(data){
        this.storeUser(data);
        this.$router.push('/shouye')
      },
      logins() {
        let deviceId = this.guid();
        axios({
          method: 'POST',
          url: 'http://192.168.0.164/authentication/form',
          data: Qs.stringify(this.form),
          headers: {
            Authorization: "Basic aml1aml1OjEyMzQ1Ng==",
            deviceId: deviceId,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          withCredentials: false
        }).then(res => {
          res.data.deviceId = deviceId;
          res.status == 200 ? this.loginSuccess(res.data) : fadeInOut(res.data.msg);
        });


        function fadeInOut(msg) {
          var time = null;
          var time1 = null;
          clearInterval(time);
          clearInterval(time1);
          var div = document.createElement("div");
          div.innerHTML = msg;
          div.setAttribute('id', 'msgP');
          document.body.appendChild(div);
          var num = 0;
          var step = 30;
          time = setInterval(function () {
            num += step;
            if (num >= 360) {
              time1 = setTimeout(() => {
                document.body.removeChild(div)
                clearTimeout(time1)
              }, 1000)
              clearInterval(time)
            } else {
              document.getElementById("msgP").style.background = 'rgba(0,0,0,' + (num / 400) + ')';
            }
          }, 50)
        }

      },
    },

  }</script>
<style scoped lang="scss">
  @import url("../assets/font/iconfont.css");

  #box {
    position: relative;
  }

  #loginBox {
    position: absolute;
    top: 36%;
    right: 13%;
    width: 394px;
    height: 434px;
    background: rgba(255, 255, 255, 1);
    border-radius: 15px;
    opacity: 0.865;
    padding: 0 20px;
  }

  #title {
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    font-weight: bold;
    line-height: 100px;
  }

  .inputBox {
    position: relative;
    margin: 20px 0;
  }

  .icon {
    position: absolute;
    z-index: 100;
    top: 10px;
    left: 10px;
  }

  .selectBox {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .login {
    line-height: 40px;
    background: rgba(24, 144, 255, 1);
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    margin-top: 20px;
    cursor: pointer;
  }

  .service {
    border-radius: 4px;
    border: 1px solid rgba(217, 217, 217, 1);
    color: rgba(102, 102, 102, 1);
    background: none;
  }
</style>
