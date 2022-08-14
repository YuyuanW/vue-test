import Vue from 'vue'
import Vuex from 'vuex'
import RecordItem from 'custom'
import clone from '@/lib/clone'
Vue.use(Vuex)

const localKey = 'recordListName'
const store =  new Vuex.Store({
  state: {
    recordList : [] as RecordItem[]
  },
  getters: {
  },
  mutations: {
    initRecordList(state){
      const data = (JSON.parse(window.localStorage.getItem(localKey) || '[]'))
      state.recordList = data
    },
    createRecord(state,record){
      const record2:RecordItem = clone(record)
      record2.time = new Date()
      state.recordList.push(record2)
      console.log(state.recordList)
      store.commit('saveRecord')

    },
    saveRecord(state){
      window.localStorage.setItem(localKey,JSON.stringify(state.recordList) )
    }
  },
  actions: {
  },
  modules: {
  }
})
console.log(store.state.count)
store.commit('increment',10)
console.log(store.state.count)

export default store
