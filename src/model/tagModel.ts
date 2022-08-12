const localKey = 'tagList'
type TagType = {
    data : string[],
    add : (name:string)=>void,
    fetch : ()=>void,
    save:()=>void,
}
const tagModel:TagType = {
    data : [],
    add(name:string){
        if(this.data.indexOf(name)>=0){
            window.alert('标签名重复')
            return 
        }else if(name){
            this.data.push(name)
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