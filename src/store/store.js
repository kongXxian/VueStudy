import Vue from 'vue'
import Vuex from 'vuex'

//数据持久化
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todo: null,
    todos:[
      {id:'001',title:'学Vue',completed:false},
      {id:'002',title:'学Anguar',completed:true},
      {id:'003',title:'学React',completed:false},
    ]
  },
  getters:{
    //已完成
    completedTotal(state){
      return state.todos.filter(ele=>ele.completed).length
    },
    //全部
    total({todos}){
      return todos.length
    }
  },
  mutations: {
    //添加
    addTodo (state,payload) {
      state.todo=payload;
      state.todos.unshift(payload)
    },
    //删除
    delTodo (state,payload) {
      state.todos=state.todos.filter(ele=>{
        if(ele.id==payload.id)return false
        else return true
      })
    },
    //修改完成状态
    changeTodo (state,payload){
        state.todos=state.todos.map(ele=>{
        if(ele.id==payload.id){
          ele.completed=payload.checked
        }
        return ele
      })
    },
    //全选
    checkAll (state,payload){
      state.todos=state.todos.map(ele=> {
        ele.completed = payload.checked
        return ele
      })
    },
    //清除已完成
    delCompleted(state,payload){
      state.todos=state.todos.filter(ele=>!ele.completed)
    }
  },
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: "store",
      render(state) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state };
      }
    })
  ]

})

export default store