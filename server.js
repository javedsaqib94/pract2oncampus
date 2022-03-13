const express = require("express");

const app = express();
const port = 3030;

app.listen(port, () => {

    console.log("hello World " + port);
})

console.log("Hello, I am at line 10");

const addTwoNumber =(n1,n2) => 
{
    console.log(n1+n2);
    return n1 + n2;
}
console.log(addTwoNumber(10,14));

app.get("/addTwoNumbers", (req,res) =>{
    const n1 =parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);

   res.send(addTwoNumber(n1,n2).toString());
});