const express = require("express")
const app = express();
const port = 80

app.get("/",(req,res) => {
    res.send("Server is up and running")
})

app.listen(port,()=>{
    console.log(`Application is running at http://localhost:${port}`)
})