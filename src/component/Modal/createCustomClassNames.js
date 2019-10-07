export default function customClassNames(cls,name){
    return cls.split(' ').reduce((res,cur)=>{
        res && (res +=' ')
        return res + cur + '__' + name
    },'')
}