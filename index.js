import express from "express";

const app = express();

app.get("/", (req, res) => {
    const obj={
        name:"Sumit",
        age:25,
        city:"Maharashtra"
    }
    res.send(obj);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});