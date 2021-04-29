<template>
  <div>
      <button type="button" v-on:click="seen = !seen">On/Off</button><br/>
      <button type="button" v-on:click="PassDataForParentByEvent">Pass data to parent component</button>
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
            seen: true,
        }
    },
    methods: {
        PassDataForParentByEvent() {
            this.$emit('hehehe', 2) // gửi event hehehe cho component cha
        }

    },
}
</script>

<style>

</style>