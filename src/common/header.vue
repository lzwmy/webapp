<template>
  <div>
    <mt-header :title="title">
        <router-link to="" slot="left">
          <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
        </router-link>
        <i slot="right" class="icon iconfont icon-sousuo" @click="$router.push('/search')"></i>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header,Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
export default {
    name:"head-com",
    data () {
        return{
          title:""
        }
    },
    watch:{
      $route(){
        this.title = this.$route.meta.title;
      }
    },
    methods:{
        
    },
    created(){
        
    },
}
</script>

<style scoped lang="scss" type="text/css">
  .mint-header{
    background: #f2f2f2;
    color:#333;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    z-index: 999;
    i{
      font-size:.4rem;
    }
  }
</style>

