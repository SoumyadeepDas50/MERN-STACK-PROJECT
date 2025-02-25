const express=require("express");
const db=require('./database')
const app=express()

app.listen(
    5000,
    () => console.log("Backend is running")
)