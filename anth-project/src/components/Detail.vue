<template>
  <div>
      <button type="button" v-on:click="seen = !seen">On/Off</button>
      <table v-show="seen"> 
          <tr>
              <th>id</th>
              <th>name</th>
          </tr>
          <tr>
              <td>{{ sDataDetail.id }}</td>
              <td>{{ sDataDetail.name }}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props: ['sDataDetail'],
    data() {
        return {
            seen: true
        }
    },
}
</script>

<style>

</style>