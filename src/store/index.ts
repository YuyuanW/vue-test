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
      record2.time = new Date().toISOString()
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
    editTag(state,newTag:{id:string,name:string}){
      const tag = state.tagList.filter(t=>t.id===newTag.id)[0]
      if(tag){
          if(tag.name === newTag.name){
              return 'duplicated'
          }else{
              tag.name = newTag.name
              store.commit('saveTag')
              // window.alert('修改成功')
              return 'success'
          }
      }else{
          // throw new Error('not found')
          return 'not found'
      }
    },
    removeTag(state,id){
      let index = -1
        for(let i=0;i<state.tagList.length;i++){
            if(state.tagList[i].id === id){
                index = i
                break 
            }
        }
        state.tagList.splice(index,1)
        store.commit('saveTag')
        window.alert('删除成功')
        return true
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
