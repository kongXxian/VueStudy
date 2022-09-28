<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.completed" @click="checkTodo"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="removeTodo">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:{todo:Object},
  created(){
    // console.log(this.$props)
  },
  methods:{
    //删除todo
    removeTodo(){
      // this.$emit('removeTodo',this.todo.id)
      console.log(111,this.todo.id)
      this.$store.commit('delTodo',{id:this.todo.id})
    },
    //改变选中状态
    checkTodo(e){
      // this.$emit('checkTodo', {id:this.todo.id,checked:e.target.checked})
      this.$store.commit('changeTodo',{id:this.todo.id,checked:e.target.checked})
    }
  }
}
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }
</style>