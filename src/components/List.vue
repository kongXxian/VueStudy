<template>
  <ul class="todo-main">
    <Item v-for="item in todos" :key="item.id" :todo="item" />
  </ul>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "List",
  components:{
    Item
  },
  data(){
    return{

    }
  },
  computed:{
    todos(){
      return this.$store.state.todos
    }
  },
  methods:{
    //删除
    // callback(id){
    //   this.todos=this.todos.filter(ele=>{
    //     if(ele.id==id)return false
    //     else return true
    //   })
    // },
    //改变选中状态
    // checkChange(item){
    //   console.log('@',item)
    //   this.todos=this.todos.map(ele=>{
    //     if(ele.id==item.id){
    //       ele.completed=item.checked
    //     }
    //     return ele
    //   })
    // }
  },
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>