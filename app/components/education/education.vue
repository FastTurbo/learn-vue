<template>

    <div>
        <h1>Education {{ $route.params.user }}</h1>
        <h2>from:{{ from }}</h2>
        <h2>to:{{ to }}</h2>
    </div>
</template>


<script>
    /*--------script----------*/
    export default {
      data:() => {
        return {
          from: '',
          to: ''
        }
      },

      watch: {
        '$route': (to, from) => {
          console.log(to,from)
          this.to = to.path;
        }
      }

    }

</script>


<style>
    /*---------style-----------*/

</style>