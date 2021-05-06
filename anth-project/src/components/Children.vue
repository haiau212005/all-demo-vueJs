<template>
  <div>
      <p>day là children </p>
      <p>{{ PropHere }}</p>
      <button type="button" v-on:click="PassData">send</button>
      <table border="1" id="anhth2">
          <tr>
              <td>id</td>
              <td>name</td>
          </tr>
          <tr>
              <td>1</td>
              <td>hai anh</td>
          </tr>
          <tr>
              <td>2</td>
              <td>hen</td>
          </tr>
      </table>
      <p id="anhth3"><button type="button" v-on:click="Test">Test</button></p>
        <div class="row">
            <div class="col-md-4" style="border: 1px solid red">
                a
            </div>
            <div class="col-md-4" style="border: 1px solid red">
                b
            </div>
            <div class="col-md-4" style="border: 1px solid red">
                c
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        PassData() {
            this.$emit('PassNow', 100)
        },
        Test(){
            let rs = $('#anhth2');
            console.log(rs);
        }
    },
    props: ['PropHere'],
    mounted () {
        // window.$ = window.jQuery = require('jquery'); // not sure if you need this at all
        // window.Bootstrap = require('bootstrap');
    },
}
</script>

<style>

</style>