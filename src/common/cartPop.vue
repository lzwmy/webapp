<template>
    <mt-popup
        v-model="popupVisible"
        position="bottom">
        <div class="cartPop">
            <span class="cloes icon iconfont icon-shanchuguanbiquxiaowubiankuang" @click="popupVisible=false"></span>
            <div class="top">
                <div class="box flex-center">
                    <img src="../../static/images/p1.jpg" alt="">
                </div>
                <div class="content">
                    <p>&yen;2899</p>
                    <p class="text">小米8 8GB+128GB 蓝色</p>
                </div>
            </div>
            <div class="spec">
                <div class="specs">
                    <h4>型号</h4>
                    <mt-button plain size="small">6GB+128GB</mt-button>
                    <mt-button plain size="small">8GB+64GB</mt-button>
                    <mt-button plain size="small">8GB+128GB</mt-button>
                </div>
                <div class="specs">
                    <h4>型号</h4>
                    <mt-button plain size="small">6GB+128GB</mt-button>
                    <mt-button plain size="small">8GB+64GB</mt-button>
                    <mt-button plain size="small">8GB+128GB</mt-button>
                </div>
                <div class="specs">
                    <h4>型号</h4>
                    <mt-button plain size="small">6GB+128GB</mt-button>
                    <mt-button plain size="small">8GB+64GB</mt-button>
                    <mt-button plain size="small">8GB+128GB</mt-button>
                </div>
                <div class="specs">
                    <h4>颜色</h4>
                    <mt-button plain size="small">白色</mt-button>
                    <mt-button plain size="small">黑色</mt-button>
                    <mt-button plain size="small">红色</mt-button>
                </div>
                <div class="specs num">
                    <h4>购买数量</h4>
                    <div class="wrap">
                        <mt-button plain size="small">-</mt-button>
                        <span>1</span>
                        <mt-button plain size="small">+</mt-button>
                    </div>
                </div>
            </div>
            <div class="foot flex-center"><h3>加入购物车</h3></div>
        </div>
    </mt-popup> 
</template>

<script>
import  Vue from 'vue';
import { Popup, Button } from 'mint-ui';
Vue.component(Popup.name, Popup);
Vue.component(Button.name, Button);
export default {
    name:"cartpop-com",
    data () {
        return{
          popupVisible:false
        }
    },
    methods:{
        openPopup(){
            this.popupVisible = true;
        }
    }
}
</script>

<style scoped lang="scss" type="text/css">
 .cartPop{
    width: 100%;
    height: 10.4rem;
    background:#fff;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding:25px 15px;
    .cloes{
        position: absolute;
        right:15px;
        top:15px;
    }
    .top{
        height: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: .4rem;
        .box{
            width:2rem;
            height:2rem;
            margin-right: .3rem;
            border:1px solid #e5e5e5;
            img{
                width:auto;
                max-height: 100%;
            }
        }
        .content{
            p{
                color:#ff6700;
                font-size:.5rem;
            }
            .text{
                color:#666;
                font-size:.30rem;
            }
        }
    }
    .spec{
        margin-bottom: .4rem;
        height: 5.8rem;
        overflow: auto;
        .specs{
            margin-bottom: .4rem;
            padding-bottom:.2rem;
            position: relative;
            &:after{
                content:"";
                display: block;
                width:100%;
                height: 1px;
                background: #ddd;
                transform:scaleY(.5);
                position: absolute;
                bottom:0;
                left:0;
            }
            .mint-button{
                font-size: 12px;
            }
        }
        .num{
            display: flex;
            justify-content:space-between;
            align-items: center;
        }
    }
    .foot{
        width:100%;
        height: 40px;
        background: #ff6f0d;
        border-radius: .5rem;
        color:#fff;
    }
 }
 .mint-popup-bottom{
     width:100%;
     border-radius: 10px;
 }
</style>

