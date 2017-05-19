<template>
    <div>
        <Header></Header>
    </div>

</template>

<script>
import Header from './header/header.vue'
export default {
  data () {
    return {
      message:'Hello Vue.js!'
    }
  },
  components:{Header}
}
</script>

<style>

    .message{
        color:yellowgreen;
    }

</style>