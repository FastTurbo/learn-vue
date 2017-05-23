<template>
    <div>
        <Header></Header>
        <Nav></Nav>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>

    </div>


</template>

<script>
import Header from './header/header.vue'
import Nav from './nav/nav.vue'


export default {
  data () {
    return {
      message:'Hello Vue.js!'
    }
  },
  components:{
    'Header':Header,
    'Nav':Nav
  }
}
</script>

<style>

    .message{
        color:yellowgreen;
    }

    .slide-fade-enter-active{
        transition:all .3s ease;
    }


    .slide-fade-enter{
        transform:translate(-10px);
        opacity:0;
    }

</style>