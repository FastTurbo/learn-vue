<template>
    <div class="footer">
        <p>
            <span>Copyright ©</span>
            All right reserved : <a href="https://github.com/FastTurbo">https://github.com/FastTurbo</a>
            <span class="scan">
                我的二维码:
                <a href="javascript:void(0);" @click="openScan()">
                    点击打开
                    <div class="scan-block" :class="{show:isShow}">
                        <h5>扫描二维码加我微信</h5>
                        <img src="../../img/logo.png" alt="">
                    </div>
                </a>
            </span>
        </p>
    </div>
</template>


<script>
    /*--------script----------*/
    export default{

      data () {
        return {
          isShow:false
        }
      },
      methods:{
        openScan () {
            this.isShow = !this.isShow
        }
      }

    }

</script>


<style>
    /*---------style-----------*/
    .footer{
        margin-top:1rem;
        background:#333;
        opacity: 0.6;
    }

    .footer p{
        text-align:center;
        font-size:1.6rem;
        color:#fff;
        height:3rem;
        line-height:3rem;
    }

    .footer p a{
        text-decoration: none;
        color:#dedede;
    }

    .footer .scan{
        padding-left:10rem;
        position:relative;
    }

    .scan-block{
        position:absolute;
        bottom:3rem;
        opacity: 0;
        right:0;
        width:0;
        height:0;
        border:1px solid yellowgreen;
        background:#00CD00;
        transition:all ease .1s;
    }

    .scan-block.show{
        opacity:1;
        width:12rem;
        height:14rem;
    }

    .scan-block h5{
        margin:0;
        height:3rem;
        color:#fff;
        opacity: 1;
        line-height:3rem;
        text-align:center;
        font-size:1.2rem;
    }

    .scan-block img{
        display:block;
        opacity: 1;
        width:10rem;
        height:10rem;
        margin:0 auto;
    }
</style>