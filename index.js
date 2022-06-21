const express = require('express');
const app = express();
app.use(express.json());

let userlist = [
{   id : 1,
    name:"Pedro",
    age:19,
    married: false,
},
{   id : 2,
    name:"Paulo",
    age:20,
    married: false,
},
{   
    id : 3,
    name:"Pedro",
    age:28,
    married: true,
},];

app.get("/users", (req, res)=>{
    res.json(userlist);
});

app.post("/users",(req, res)=>{ 
    const newUser = req.body;
    userlist.push(newUser);
    res.json(userlist);
    
});

app.delete("/users/:id",(req, res)=>{
    const id = req.params.id;
    let foundId = false;

    for (let i = 0; i< userlist.length;i++){
        if (userlist[i].id == id){
            userlist.splice(i,1);
            foundId = true;
        }
    }
    if (!foundId){
        res.status(404).json({error:"User Id not found"});
    } else{
        res.json(userlist);
    }
    

});
//i found that when i put "app.listen(""3001)", the program would run the first time then raise and error the following times
// but with "2001" the problem doesn't arise. 
app.listen("2001",()=>{
    console.log("Server running on port 3001")
});
