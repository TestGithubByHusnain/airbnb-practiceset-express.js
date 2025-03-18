const path= require ('path');
const express= require ('express');
const rootDir=require('./utils/pathUtil')

// Locall modules
const homeRoute=require('./routes/homeroute');
const contact= require('./routes/contact');
const app= express();
app.use(express.urlencoded());
app.use(homeRoute);

app.use(contact);

app.use((req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "404.html"));
})
const PORT = 3000;
app.listen(PORT, ()=>{
console.log(`Server is running on address http://localhost:${PORT}`);
})