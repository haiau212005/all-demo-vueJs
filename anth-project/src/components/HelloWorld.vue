<template>
  <div>
    <h2>Hello</h2>
    <h2>result: {{ msg }}</h2>
    <children v-on:PassNow="GetDataFromChil" v-bind:PropHere="PropHere"></children>
  </div>
</template>

<script>
import Children from './Children.vue'

export default {
  data () {
    return {
      msg: 0,
      PropHere: 'anhth'
    }
  },
  components: {
    Children
  },
  methods: {
      GetDataFromChil(arg){
          this.msg = arg
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
