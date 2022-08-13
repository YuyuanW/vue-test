import createId from '@/lib/idCreator'
const localKey = 'tagListS'
type Tag = {
    id:string,
    name:string
}
type TagType = {
    data : Tag[],
    add : (name:string)=>void,
    edit : (id:string,name:string)=> 'success'|'duplicated'| 'not found',
    remove : (id:string)=>boolean,
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
            const newId = createId() || '0fuck'
            this.data.push({id:newId,name:name})
            this.save()
            window.alert('保存成功')
            return
        }else{
            return
        }
        
    },
    edit(id:string,name:string){
        const tag = this.data.filter(t=>t.id===id)[0]
        if(tag){
            if(tag.name === name){
                return 'duplicated'
            }else{
                tag.name = name
                this.save()
                // window.alert('修改成功')
                return 'success'
            }
        }else{
            // throw new Error('not found')
            return 'not found'
        }
    },
    remove(id:string){
        let index = -1
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].id === id){
                index = i
                break 
            }
        }
        this.data.splice(index,1)
        this.save()
        return true
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