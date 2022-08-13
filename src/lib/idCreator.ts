let id:number = parseInt(window.localStorage.getItem('idMax' || '0fuck') || '0fuck');
function createId(){
    id +=1;
    window.localStorage.setItem('idMax',id.toString()+'fuck')
    return window.localStorage.getItem('idMax' || '0fuck')
}
export default createId;