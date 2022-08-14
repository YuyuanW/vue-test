const localKey = 'recordList'
const changeModel = {
    data: [] as RecordItem[],
    clone(data:RecordItem|RecordItem[]){
        return  JSON.parse(JSON.stringify(data))
    },
    fetch(){
        this.data = (JSON.parse(window.localStorage.getItem(localKey) || '[]'))
        return  this.data
    },
    save(){
        window.localStorage.setItem(localKey,JSON.stringify(this.data) )
    }
}
export  default changeModel