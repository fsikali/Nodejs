// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)

const names = require('./names') 
const sayHi = require('./utils') 
require('./another_alt')
//console.log(names)

const data = require('./alternative') 
console.log(data)

sayHi('James') 
sayHi(names.John) 
sayHi(names.Peter) 









