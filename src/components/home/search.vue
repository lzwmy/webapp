<template>
  <div class="search">
        <div class="top">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click="$router.back(-1)"></mt-button>
            </router-link>
            <mt-search
                v-model="searchVal"
                cancel-text="取消"
                :autofocus='true'
                :result.sync="result"
                placeholder="搜索">
            </mt-search>
        </div>

        <p v-show="isNull">搜索结果为空</p>
        <div class="classify" v-show="isShow">
            <h3>常用分类</h3>
            <div class="wrap">
                <span>手机</span>
                <span>电视</span>
                <span>笔记本</span>
                <span>盒子</span>
                <span>路由器</span>
                <span>手机</span>
                <span>手机</span>
                <span>手机</span>
                <span>手机</span>
            </div>
        </div>     
    

    
  </div>
</template>

<script>
import Vue from 'vue';
import { Header, Search  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Search.name, Search);
export default {
    name:"search-com",
    data () {
        return {
            isShow:true,
            isNull:false,
            searchVal:"",
            result:['1','2']
        }
    },
    watch:{
        searchVal(newVal,old){
            //不为空时内空隐藏
            if(newVal){
                this.isShow = false;
            }else{
                this.isShow = true;
            }
        }
    },
    methods:{
        
    },
    created(){
        
    },
}
</script>

<style scoped lang="scss" type="text/css">
    .search{
        .top{
            position: relative;
            .mint-button{
                position:absolute;
                top:0;
                left:0;
                font-size: 16px;
                background: transparent;
                box-shadow: none;
                z-index: 99;
            }
            /deep/ .mint-searchbar-inner{
                margin-left:.6rem;
            }
        }
        .mint-search {
            font-size: 14px;
            /deep/ .mintui-search{
                font-size: 18px;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .classify{
            position: absolute;
            top:1.2rem;
            left:.2rem;
            h3{
                font-size:.28rem;
            }
            .wrap{
                padding:.1rem;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                span{
                    font-size:.24rem;
                    display: inline-block;
                    min-width:.8rem;
                    height: .5rem;
                    line-height: .5rem;
                    text-align: center;
                    padding:.04rem .08rem;
                    background: #ccc;
                    margin:0 .1rem .1rem 0;
                }
            }
        }
    }
</style>

