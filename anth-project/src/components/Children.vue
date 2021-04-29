<template>
  <div>
      <p>day là children </p>
      <p>{{ PropHere }}</p>
      <button type="button" v-on:click="PassData">send</button>
    </div>
</template>

<script>
export default {
    methods: {
        PassData() {
            this.$emit('PassNow', 100)
        }
    },
    props: ['PropHere'],
}
</script>

<style>

</style>