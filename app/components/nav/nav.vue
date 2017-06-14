<template>
    <ul class="nav">
        <li v-for="(item,index) in items" v-bind:class="{'active':index==activeNum}"  :key="index">
            <!--<router-link class="link" :to="item.route">{{item.text}}</router-link>-->
            <div class="content">
                <div class="title"
                     :class="{active:index===activeNum}"
                     @click="getActive(index)">
                    {{item.text}}
                </div><div class="sub-nav"
                           :class="{active:index===activeNum}">
                    <table >
                        <tr>
                            <td>
                                <router-link class="link" :to="item.route">{{item.childRoute[0].value}}</router-link>
                            </td>
                            <td>
                                <router-link class="link" :to="item.route">{{item.childRoute[1].value}}</router-link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <router-link class="link" :to="item.route">{{item.childRoute[2].value}}</router-link>
                            </td>
                            <td>
                                <router-link class="link" :to="item.route">{{item.childRoute[3].value}}</router-link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </li>
    </ul>
</template>

<script>

    export default {

      data () {
        return {
          items:[
            {
              text:"首页",
              value:'index',
              route:'/index',
              childRoute:[
                {value:'我的简介',route:'/a'},
                {value:'我的经历',route:'/a'},
                {value:'我的球队',route:'/a'},
                {value:'我的特点',route:'/a'}
              ]
            },
            {
              text:"家庭",
              value:'family',
              route:'/family',
              childRoute:[
                {value:'1',route:'/a'},
                {value:'1',route:'/a'},
                {value:'1',route:'/a'},
                {value:'1',route:'/a'}
              ]
            },
            {
              text:'工作',
              value:'education',
              route:'/education/tianpf',
              childRoute:[
                {value:'1',route:'/a'},
                {value:'1',route:'/a'},
                {value:'1',route:'/a'},
                {value:'1',route:'/a'}
              ]
            },
            {
              text:'生活',
              value:'education',
              route:'/education/tianpf',
              childRoute:[
                {value:'1',route:'/a'},
                {value:'1',route:'/a'},
                {value:'1',route:'/a'},
                {value:'1',route:'/a'}
              ]
            }
          ],
          activeNum:0
        }
      },
      computed:{
        isActive: (...args) => {
          console.log(args)
        }
      },

      methods:{
        getActive(num){
          this.activeNum = num
        },
        hideSub(){
          this.activeNum = 100
        }
      }
    }
</script>

<style>

    .nav{
        list-style:none;
        width:100%;
    }
    .nav>li{
        box-sizing:border-box;
        display:inline-block;
        vertical-align: top;
        width:25%;
        font-size:0;
        height:11rem;
        cursor:pointer;
        padding-right:1rem;
    }
    .nav>li:last-child{
        padding-right:0;
    }

    .nav>li .title{

        opacity: 1;
        vertical-align: top;
        display:inline-block;
        width:100%;
        color:#fff;
        height:10rem;
        text-align:center;
        line-height:10rem;
        transition:all .1s ease;
    }
    .nav>li .title.active{
        width:30%;

    }
    .nav>li .link{
        display:block;
        width:100%;
        height:5rem;
        line-height:5rem;
        text-decoration: none;
        color:#fff !important;
    }
    .nav>li.active{
    }

    .nav>li .content{
        overflow:hidden;
        width:100%;
        height:100%;
        background:#222;
        opacity: 0.6;
    }

    .sub-nav{
        display:inline-block;
        width:70%;
        height:100%;
        right:-70%;
        position:relative;
        vertical-align: top;
        opacity: 0;
        transition:right .1s ease .05s;

    }
    .sub-nav.active{
        opacity: 1;
        right:0;
        width:70%;
        transition:right .1s ease .05s;

    }

    .sub-nav table{
        width:100%;
        height:100%;
        border-collapse: collapse;
    }

    .sub-nav td{
        box-sizing:border-box;
        font-size:2rem;
        text-align:center;
        color:#fff;
        opacity: 1;
        width:50%;
        height:5rem;
        border-left:1px solid #fff;
        border-bottom:1px solid #fff;
        collapse: collapse;
    }

    .sub-nav tr:nth-child(2) td{
        border-bottom:0;
    }
</style>