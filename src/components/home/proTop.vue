<template>
  <div>
    <mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button slot="right" @click="sheetVisible = true;">分享</mt-button>
    </mt-header>

    <mt-actionsheet
        :actions="actions"
        cancelText="取消分享"
        v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Actionsheet } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Actionsheet.name, Actionsheet);
export default {
    name:"pro-top",
    data () {
        return {
            actions:[
                {
                    name:"QQ",
                    method:"onShareqq"
                },
                {
                    name:"微信",
                    method:"b"
                },
                {
                    name:"朋友圈",
                    method:"b"
                },
                {
                    name:"微博",
                    method:"b"
                }
            ],
            sheetVisible:false,

        }
    },
  methods:{
      
  },
  created(){
    
  },
}
</script>

<style scoped lang="scss" type="text/css">
    .mint-header.is-fixed{
        z-index: 999;
    }
</style>

