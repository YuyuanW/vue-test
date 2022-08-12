const localKey = 'tagList'
type Tag = {
    id:number,
    name:string
}
type TagType = {
    data : Tag[],
    add : (name:string)=>void,
    fetch : ()=>Tag[],
    save:()=>void,
}
const tagModel:TagType = {
    data : [],
    add(name:string){
        const names = this.data.map(t=>t.name)
        if(names.indexOf(name)>=0){
            window.alert('标签名重复')
            return 
        }else if(name){
            this.data.push({id:1000,name:name})
            this.save()
            window.alert('保存成功')
            return
        }else{
            return
        }
        
    },
    fetch(){
        this.data =  (JSON.parse(window.localStorage.getItem(localKey) || '[]')) 
        return this.data
    },
    save(){
        window.localStorage.setItem(localKey,JSON.stringify(this.data) )
    }
}
export  default tagModel