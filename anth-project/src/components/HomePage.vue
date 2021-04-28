<template>
  <div>
      <h2>Home Page</h2>
      <table>
          <tr>
              <th>id</th>
              <th>name</th>
          </tr>
          <tr v-for="item in sData" v-bind:key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sData: this.$sData
        }
    },
    mounted () {
        //console.log();
    },
}
</script>

<style>

</style>