
const getModule1=require('./module1')
const getModule2 = require("./module2");
const data=require('./module3')
require('./mind-stack')




console.log(data.items[1]);
console.log(data.exportModule.city);

getModule2("sujan");
getModule2(getModule1.akash);
getModule2(getModule1.peter);
getModule2(getModule1.radhe);
