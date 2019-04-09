<template>
  <div class="main">
    <top-com></top-com>
    <swiper-com></swiper-com>
    <br/>

    <ul class="product">
      <li>
        <div class="item">
          <router-link to="/proDetail">
            <div class="img">
              <img src="../../../static/images/p1.jpg" alt="">
            </div>
            <div class="text">
              <h4>小米9尊享版</h4>
              <p>2400万旗舰自拍</p>
              <p class="price">&yen;2799起 <span>&yen;2999</span></p>
            </div>
          </router-link>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
      <li>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p1.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
      <li>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p1.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
import Top from '@/components/home/top.vue';
import Swiper from '../../components/home/swiper.vue';
export default {
  data () {
    return {
      
    }
  },
  components:{
    [Top.name]:Top,
    [Swiper.name]:Swiper,
  },
  created(){
  },
  methods:{

  }
}
</script>

<style scoped lang="scss" type="text/css">
  .product{
    height: 1000px;
    li{
      display: flex;
      justify-content:space-around;
    }
    li .item:first-child{
      margin-right:.04rem;
    }
    .img{
      height: 3.7rem;
      img{
        width:100%;
      }
    }
    .text{
      padding:.2rem .27rem;
      line-height: .36rem;
      h4{
        font-size:.28rem;
        font-weight: normal;
      }
      p{
        font-size:.24rem;
        color:#ccc;
      }
      .price{
        font-size:.26rem;
        color:#ea625b;
        span{
          color:#666;
          font-size:.24rem;
          text-decoration:line-through
        }
      }
    }
  }
</style>

