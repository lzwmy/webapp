<template>
<div class="wrap">
    <mt-swipe :auto="4000">
        <mt-swipe-item>
            <img src="https://static.maizuo.com/v5/upload/915ef58d9667bf9efb1a9ce66a308fd0.jpg?x-oss-process=image/quality,Q_70" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="https://static.maizuo.com/v5/upload/ce6da101ebaf09e14536133f44a69c38.jpg?x-oss-process=image/quality,Q_70" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="https://static.maizuo.com/v5/upload/1fc5abb0e45ae533e3848f58d9124dfd.jpg?x-oss-process=image/quality,Q_70">
        </mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name:'swiper-com',
  data () {
    return {
      
    }
  },
  created(){
    
  }
}
</script>

<style scoped lang="scss" type="text/css">
    .wrap{
        margin-top:1rem;
        height: 4.2rem;
        background: red;
    }
    
</style>



