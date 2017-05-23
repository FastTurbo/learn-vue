<template>
    <ul class="nav">
        <li v-for="(item,index) in items" v-bind:class="{'active':index==activeNum}" @click="getActive(index)" :key="index">
            <router-link class="link" :to="item.route">{{item.text}}</router-link>
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
              route:'/index'
            },
            {
              text:"家庭",
              value:'family',
              route:'/family'
            },
            {
              text:'教育',
              value:'education',
              route:'/education'
            }
          ],
          activeNum:0
        }
      },

      methods:{
        getActive(num){
          this.activeNum = num
        }
      }
    }
</script>

<style>

    .nav{
        list-style:none;
        height:4rem;
        width:100%;
        line-height:4rem;
        background:darkslategray;
    }
    .nav li{
        display:inline-block;
        vertical-align: top;
        width:12%;
        font-size:2rem;
        color:#fff;
        line-height:4rem;
        text-align:center;
        cursor:pointer;
    }
    .nav li .link{
        display:block;
        width:100%;
        height:100%;
        text-decoration: none;
        color:#fff !important;
    }
    .nav li:hover{
        background:darkseagreen;
    }

    .nav li.active{
        background:darkcyan;
    }
</style>