require("./filewithoutvar.js")
const obj=require("./withvar.js") //you can destrcture the things 
const {twomodule,onemodule}=require("./NestedModule")


console.log(onemodule.moduleone)
console.log("this file consist of import and exports learning")
console.log(obj)
const data ="from the main file "
console.log(data)
const a =5;
const b=5
obj.add(a,b);
obj.minus(a,b);
console.log(obj.data);


console.log(module.exports)




