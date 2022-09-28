<template>
  <div class="todo-footer" >
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" @change="checkAll" v-model="allCheck"/>全选
    </label>
    <span>
			<span>已完成{{completedTotal}}</span> / 全部{{total}}
		</span>
    <button class="btn btn-danger" @click="delCompleted">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  data(){
    return{
      allCheck:false
    }
  },
  computed:{
    //已完成
    completedTotal(){
      return this.$store.getters.completedTotal
    },
    //全部
    total(){
      return this.$store.getters.total
    }
  },
  methods:{
    //全选
    checkAll(){
      this.$store.commit('checkAll',{checked:this.allCheck})
    },
    //
    delCompleted(){
      this.$store.commit('delCompleted')
    }
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>