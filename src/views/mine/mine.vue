<template>
  <div class="mine">
    <div class="top">
      <img src="http://temp.im/50x50/ff5a5f/fff" alt="">
      <p>登录 / 注册</p>
    </div>
    <mt-cell
      title="我的订单"
      to="/"
      is-link
      value="全部订单">
    </mt-cell>
    <ul class="wrap">
      <li>
        <i class="icon iconfont icon-daifukuan"></i>
        <p>待付款</p>
      </li>
      <li>
        <i class="icon iconfont icon-daishouhuo"></i>
        <p>待收货</p>
      </li>
      <li>
        <i class="icon iconfont icon-weixiu"></i>
        <p>退换修</p>
      </li>
    </ul>
    <mt-cell
      title="会员中心"
      to="/"
      is-link
      value="">
    </mt-cell>
    <mt-cell
      title="我的优惠"
      to="/"
      is-link
      value="">
    </mt-cell>
    <mt-cell
      title="服务中心"
      to="/"
      is-link
      value="">
    </mt-cell>
    <mt-cell
      title="设置"
      to="/"
      is-link
      value="">
    </mt-cell>
  </div>
</template>

<script>
import { Cell } from 'mint-ui';
import Vue from 'vue'
Vue.component(Cell.name, Cell);
export default {
  data () {
    return {
      
    }
  },
  created(){
  }
}
</script>

<style scoped lang="scss" type="text/css">
  .top{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #f07c10;
    padding:.3rem .4rem;
    img{
      border-radius: 50%;
    }
    p{
      font-size:.26rem;
      color:#fff;
      margin-left:.2rem;
    }
  }
  .mint-cell{
    &:after{
      content:"";
      display: block;
      width:100%;
      height: 1px;
      background: #ddd;
      transform: scaleY(.5);
    }
  }
  .wrap{
    padding:.3rem 0;
    display:flex;
    justify-content:space-around;
    align-items: center;
    .icon{
      color:#888;
      font-size:.4rem;
    }
    p{
      text-align: center;
      font-size:.28rem;
      margin:.08rem 0;
    }
  }
</style>

