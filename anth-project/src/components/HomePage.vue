<template>
  <div>
      <h2>Home Page</h2>
      <button type="button" v-on:click="seen = !seen">show/hidden</button>
      <table v-show="seen">
          <tr>
              <th>id</th>
              <th>name</th>
          </tr>
          <tr v-for="item in sData" v-bind:key="item.id" v-on:click="GetDetail(item)">
              <td><a href="javascript:">{{ item.id }}</a></td>
              <td><a href="javascript:">{{ item.name }}</a></td>
              <td><router-link :to="{ name: 'DetailHref', params:{ id: item.id }}">link</router-link></td>
          </tr>
      </table>
      <p>{{ count }}</p>
      <hr/>
      <detail v-bind:sDataDetail="sDataDetail" v-on:hehehe="Test"></detail> 
  </div>
</template>

<script>
import Detail from './Detail.vue'
import DetailHref from './DetailHref.vue'

export default {
    data() {
        return {
            sData: this.$sData,
            seen: true,
            sDataDetail: '',
            count: 0
        }
    },
    components: {
        Detail
    },
    methods: {
        GetDetail(arg) {
            this.sDataDetail = arg
        },
        Test(arg){
            this.count += arg
        }
    },
    mounted () {
        //console.log();
    },
}
</script>

<style>

</style>