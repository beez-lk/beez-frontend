export const shorten = (string,length)=>{
    if(string.length <= length){
        return string
    } else {
        return `${string.substring(0,length-2)}..`
    }
}