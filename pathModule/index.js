const path = require("path");


console.log(path.basename("Documents\\GitHub\\backend-practice\\pathModules\\index.js"));
// it return basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.dirname("Documents\\GitHub\\backend-practice\\pathModules\\index.js"))
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

console.log(path.join("/search","label","praveen/kalpi"))
console.log(path.join("/search","label","praveen/kalpi",".."))

console.log(path.join(__dirname,"praveen","kumar"))

console.log(path.normalize("c://foo///bar//index.js"))

console.log(path.parse(__filename))
console.log(path.parse(__filename).base)
console.log(path.parse(__filename).name)
console.log(path.isAbsolute("//server"))
console.log(path.isAbsolute("//server//bar"))
console.log(path.isAbsolute("server\\bar"))