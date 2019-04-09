<template>
  <div class="addCart">
      <div class="wrap">
            <router-link to="/" class="to-link">
                <i class="icon iconfont icon-weibiao45100847"></i>
                <span>首页</span>
            </router-link>
            <router-link to="/cart" class="to-link">
            <div class="cartIcon">
                <span>{{number}}</span>
                <i class="icon iconfont icon-gouwuche"></i>
            </div>
                <span>购物车</span>
            </router-link>
      </div>
      <span class="btn-add" @click="popAdd">加入购物车</span>    
  </div>
</template>

<script>
export default {
    name:"addcart-com",
    data () {
        return{
          number:3
        }
    },
    methods:{
        popAdd(){
          this.$emit('pop')
        }
    }
}
</script>

<style scoped lang="scss" type="text/css">
  .addCart{
    padding:0 .2rem;
    width:98%;
    position: fixed;
    bottom:.09rem;
    left:50%;
    transform: translate3d(-50%,0,0);
    height: 1rem;
    background: #fff;
    border-radius: .1rem;
    box-shadow: 0 0 .1rem #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: fadeIn 1s;
    animation-fill-mode: forwards;
    .wrap{
      font-size:.24rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .to-link{
          display: flex;
          color:#777;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-left:.4rem;
          .cartIcon{
              position: relative;
              span{
                  position: absolute;
                  top:0px;
                  right:0px;
                  display: inline-block;
                  background: #ff6700;
                  color:#fff;
                  border-radius: 50%;
                  transform: translate3d(50%,-50%,0);
                  padding:0 .04rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-style: normal;
              }
          }
      }
    }
    .btn-add{
      display: inline-block;
      height: .6rem;
      width:130px;
      border-radius: 20px;
      background: #ff6700;
      color:#fff;
      font-size:.32rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @keyframes fadeIn {
      0%{transform: translate3d(-50%,100%,0); }
      100%{transform: translate3d(-50%,0,0); }
    }
  }
</style>

