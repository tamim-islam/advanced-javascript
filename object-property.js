const students = [
    {id:21,name:'Omar Sunny'},
    {id:31, name:'Maannaaa'},
    {id:41,name:'Moyouri'},
    {id:71,name:'Deepjol'},
]

// const names =[]
// for(let i =0; i < students.length; i++){
//     const element = students[i]
//     const name =element.name
//     names.push(name)
// }
// console.log(names)
// function name(element){
//   return  element.name
// }
const names =students.map( s => s.name)
const ids =students.map( s => s.id)
const bigger = students.filter(s =>s.id>40)
const bigger1 = students.find(s =>s.id>40)
console.log(names)
console.log(ids)
console.log(bigger)
console.log(bigger1)