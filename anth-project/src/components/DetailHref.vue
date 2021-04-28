<template>
  <div>
      <h2>Detail href</h2>
      <p>id: {{ this.sData.id }}</p>
      <p>name: {{ this.sData.name }}</p>
      <router-link :to="{ name: 'Detail' }">back</router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Param: this.$route.params,
            vData: this.$sData,
            sData: ''
        }
    },
    methods: {
    },
    mounted () {
        this.sData = this.vData.find(x=>x.id == this.Param.id)
    },
}
</script>

<style>

</style>