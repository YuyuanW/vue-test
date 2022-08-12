const localKey = 'recordList'
const changeModel = {
    clone(data:RecordItem|RecordItem[]){
        return  JSON.parse(JSON.stringify(data))
    },
    fetch(){
        return (JSON.parse(window.localStorage.getItem(localKey) || '[]')) as RecordItem[]
    },
    save(data:RecordItem[]){
        window.localStorage.setItem(localKey,JSON.stringify(data) )
    }
}
export  default changeModel