/* VUE */

const app = new Vue({
    el:'#app',
    data:{
      datos: {},
      section: "og"
    },
    created(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        fetch("https://raw.githubusercontent.com/matiasluce/monster-web/main/data/monster.json")
        .then(response => response.json())
        .then(data =>{
          this.datos = data.monsters;
        })
      }
    }
  })