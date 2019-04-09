<template>
  <div class="proDetail">
    <!-- top -->
    <pro-top></pro-top>

    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../../static/images/pro1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../../static/images/pro2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../../static/images/pro3.jpg">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="content">
        <div class="text">
            <h3>小米9 尊享版</h3>
            <p>全球首款压感屏幕指纹，快速解锁 / 骁龙845处理器，全面提升游戏性能表现 / 四曲面渐变镜面机身，轻薄圆润 / 960帧超慢动作 / 手持超级夜景</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
        </div>
        <div class="detail">
            <ul>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
            </ul>
        </div>
    </div>

    <addcart-com @pop="popAction"></addcart-com>
    <cartpop-com ref="cartPop"></cartpop-com>
  </div>
</template>

<script>
import Swiper from '@/components/home/swiper.vue';
import Top from '@/components/home/proTop.vue';
import addCart from '@/common/addCart.vue';
import CartPop from '@/common/cartPop.vue';
export default {
  data () {
    return {

    }
  },
  components:{
      [Top.name]:Top,
      [addCart.name]:addCart,
      [CartPop.name]:CartPop
  },
  methods:{
      popAction(){
          console.log(123)
        this.$refs.cartPop.openPopup();
      }
  },
  created(){
    
  },
}
</script>

<style scoped lang="scss" type="text/css">
.proDetail{
    height: 1000px;
}
.content{
    padding:.2rem;
}
 .swiper{
     height: 8.24rem;
 }
 .text{
     h3{
         font-size:.4rem;
         font-weight: normal;
     }
     p{
         font-size:.26rem;
         color:rgb(117, 116, 116);
     }
     .price{
        margin:.2rem 0;
        font-size:.38rem;
        color:#ea625b;
        span{
          color:#666;
          font-size:.26rem;
          text-decoration:line-through
        }
      }
 }
 .detail{
     overflow: hidden;
    ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        font-size:.28rem;
        text-align: center;
        overflow-x: auto;
        padding:0 0 .2rem;
        li{
            padding:0 .08rem;
            min-width: 1.6rem;
            position: relative;
            &:before{
                content:"";
                position:absolute;
                top:0;
                right:0;
                width:1px;
                display: block;
                height:1.1rem;
                transform: scaleX(0.5);
                background: #ccc;
            }
            &:last-child::before{
                display: none;
            }
        }
        img{
            width:.4rem;
            height:.4rem;
            display: block;
            margin:0 auto;
        }
        p:last-child{
            font-size:.24rem;
        }
    }
 }

.fade{
    transition: all 3s;
    animation: fadeIn 3s;
    animation-fill-mode: forwards;
}
@keyframes fadeIn {
    0%{transform: translateY(100%)}
    100%{transform: translateY(0)}
}


</style>

