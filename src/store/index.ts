import Vue from 'vue'
import Vuex from 'vuex'
// import RecordItem from 'custom'
import clone from '@/lib/clone'
import createId from '@/lib/idCreator'
Vue.use(Vuex)

const localKey01 = 'recordListName'
const localKey02 = 'tagListS'
const store =  new Vuex.Store({
  state: {
    recordList : [] as RecordItem[],
    tagList : [] as {id:string,name:string}[]
  },
  getters: {
  },
  mutations: {
    initRecordList(state){
      const data = (JSON.parse(window.localStorage.getItem(localKey01) || '[]'))
      state.recordList = data
    },
    createRecord(state,record){
      const record2:RecordItem = clone(record)
      record2.time = new Date()
      state.recordList.push(record2)
      // console.log(state.recordList)
      store.commit('saveRecord')

    },
    saveRecord(state){
      // console.log('fuck')
      window.localStorage.setItem(localKey01,JSON.stringify(state.recordList) )
    },
    initTag(state){
      const data =  (JSON.parse(window.localStorage.getItem(localKey02) || '[]')) 
      return state.tagList = data
    },
    addTag(state,name){
      const names = state.tagList.map(t=>t.name)
        if(names.indexOf(name)>=0){
            window.alert('标签名重复')
            return 'duplicated'
        }else if(name){
            const newId = createId() || '0fuck'
            state.tagList.push({id:newId,name:name})
            store.commit('saveTag')
            window.alert('保存成功')
            return 'success'
        }else{
            return 'unKnow tag'
        }
    },
    saveTag(state){
      window.localStorage.setItem(localKey02,JSON.stringify(state.tagList) )
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
