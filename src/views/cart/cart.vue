<template>
  <div class="cart">
    <ul>
      <li v-for="(item, index) in goodArr" :key="index">
        <div class="box">
          <div class="radio" :class="{'active':item.select}" @click="onSelect(item.select,index)"></div>
          <router-link to="/"><img src="http://temp.im/50x50/ff5a5f/fff" alt=""></router-link>
          <div class="detail">
            <h3>{{item.title}}</h3>
            <p>售价: {{item.price}}元</p>
            <div class="btn">
              <mt-button plain size='small' @click="onReduce(item.number,index)">-</mt-button> <span class="price">{{item.number}}</span> <mt-button plain size='small' @click="onAdd(item.number,index)">+</mt-button>
            </div>
          </div>
        </div>
        <i class="icon iconfont icon-delete" @click="onDelect(index)"></i>
      </li>
    </ul>
    <div class="footer">
      <div class="price">
        <div class="radio" :class="{'active':allSelect}" @click="onAllSelect"></div>
        <div class="text">
          <p>共{{number}}件</p>
          <h3>{{price}} 元</h3>
        </div>
      </div>
      <router-link to="/">继续购物</router-link>
      <router-link to="/" class="accounts">去结算</router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button,Toast,MessageBox } from 'mint-ui';
Vue.component(Button.name, Button);
export default {
  data () {
    return {
      price:0, //总价
      number:0, //总件数
      allSelect:false,  //全选 
      goodArr:[
        {
          title:"小米手机",
          price:100,
          select:true,
          number:1
        },
        {
          title:"小米手机",
          price:100,
          select:true,
          number:1
        },
        {
          title:"小米手机",
          price:100,
          select:false,
          number:1
        },
        {
          title:"小米手机",
          price:100,
          select:false,
          number:1
        },
        {
          title:"小米手机",
          price:100,
          select:false,
          number:1
        }
      ]
    }
  },
  computed:{

  },
  methods:{
    //勾选
    onSelect(item,index){
      this.goodArr[index].select = !item;
      this.onCount();
    },
    //减
    onReduce(number,index){
      if(number==1){
        Toast({
          message:"不能再减了",
          position: 'middle',
          duration: 1000
        })
        return ;
      }else{
        this.goodArr[index].number --;
        this.onCount();
      }
    },
    //加
    onAdd(number,index){
      this.goodArr[index].number ++;
      this.onCount();
    },
    //删除
    onDelect(index){
      MessageBox.confirm('',{
        title:'删除',
        message:'确定执行此操作?',
        confirmButtonText:"删除",
        cancelButonText:"我再想想"
      }).then(action => {
        if(action=='confirm'){
          this.goodArr.splice(index,1);
          this.onCount();
        }
      }).catch(err =>{});
    },
    //计算总价、总件数
    onCount(){
      this.price = 0;
      this.number = 0;
      this.goodArr.forEach(ele => {
        if(ele.select){
          this.price += ele.price * ele.number;
          this.number += ele.number;
        }
      });
    },
    //全选
    onAllSelect(){
      this.allSelect = !this.allSelect;
      this.goodArr.forEach(ele => {
        ele.select = this.allSelect;
      });
      this.onCount();
    }
  },
  created(){
    this.onCount();
  }
}
</script>

<style scoped lang="scss" type="text/css">
  ul{
    overflow: auto;
    position: absolute;
    top:40px;
    left:0;
    bottom:50px;
    width:100%;
  }
  ul{
    li{
      position: relative;
      padding:.2rem;
      display:flex;
      justify-content: space-between;
      align-items: center;
      &:after{
        content:"";
        position: absolute;
        bottom:0;
        left:0;
        display: block;
        width:100%;
        height: 1px;
        background: #ddd;
        transform:scaleY(.5);
      }
      .box{
        display: flex;
        justify-content: center;
        align-items: center;
        
        .router-link-active{
          margin:0 .2rem;
          width:1.82rem;
          height:1.82rem;
          border:1px solid #ddd;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            max-height: 100%;
          }
        }
        .detail{
          h3{
            font-size:.28rem;
            color:#666;
          }
          p{
            font-size:.26rem;
            color:#999;
            margin:.1rem 0;
          }
          .price{
            display: inline-block;
            min-width: .4rem;
            text-align: center;
          }
          .btn{
            font-size:16px;
            .mint-button{
              border-radius: 0;
            }
          }
        }
      }
      .icon-delete{
        color:#999;
        font-size:.4rem;
      }
    }
  }
  .radio{
    width:.4rem;
    height: .4rem;
    border:1px solid #ddd;
    background: transparent;
    border-radius: 50%;
  }
  .radio.active{
    position: relative;
    background: #ff6700;
    border:none;
    &:after{
      content: "";
      position: absolute;
      top:0;
      left:0;
      width:.4rem;
      height:.4rem;
      color:#fff;
      font-size:14px;
      text-align: center;
      line-height: .4rem;
      background: url('../../../static/images/check_press.png') center center;
      background-size: 100%;
    }
  }
  .footer{
      position: absolute;
      bottom:0;
      left:0;
      z-index: 999;
      height: 1rem;
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      font-size:16px;
      text-align: center;
      box-shadow: 0 0 5px #bbb;
      .price{
        width: 100%;
        display:flex;
        justify-content: space-around;
        align-items: center;
      }
      .router-link-active{
        width: 100%;
        height: 100%;
        line-height: 1rem;
        display: block;
        background: #f4f4f4;
        color:#333;
      }
      .accounts{
        color:#fff;
        background: #ff6700;
      }
  }
</style>

