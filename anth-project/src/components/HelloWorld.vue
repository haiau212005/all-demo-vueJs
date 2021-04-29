<template>
  <div>
    <h2>Hello</h2>
    <h2>result: {{ msg }}</h2>
    <children v-on:PassNow="GetDataFromChil"></children>
  </div>
</template>

<script>
import Children from './Children.vue'

export default {
  data () {
    return {
      msg: 0
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
