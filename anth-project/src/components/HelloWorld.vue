<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table border="1">
      <tr>
        <td>id</td>
        <td>name</td>
      </tr>
      <tr>
        <td>1</td>
        <td>快速上手. Ant Design Vue 致力于提供给程序员愉悦的开发体验。 在</td>
      </tr>
    </table>
    <button type="button" v-on:click="exportReportToExcel">Export</button>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    exportReportToExcel(){
      let table = document.getElementsByTagName("table"); // you can use document.getElementById('tableId') as well by providing id to the table tag
      TableToExcel.convert(table[0], { // html code may contain multiple tables so here we are refering to 1st table tag
        name: `export.xlsx`, // fileName you could use any name
        sheet: {
          name: 'Sheet 1' // sheetName
        }
      });
    }
  }
  
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
