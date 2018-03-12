const express = require("express")
const cors = require("cors")

let students = [{
    id: 1,
    firstName: "Alice",
    lastName: "Zephyr",
    homeTown: "Seattle"
},
{
    id: 2,
    firstName: "Bob",
    lastName: "Yellow",
    homeTown: "Vancouver"
},
{
    id: 3,
    firstName: "Claire",
    lastName: "Xylitol",
    homeTown: "Toledo"
},
{
    id: 4,
    firstName: "Daniel",
    lastName: "Winston",
    homeTown: "Akron"
},
{
    id: 5,
    firstName: "Edina",
    lastName: "Veritas",
    homeTown: "Wichita"
},]

const findById = (data, id) => {
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i]
        }
    }
    return null
}

const app = express()
app.use(cors())

app.get("/",  (req, res) => {
    res.json({data: students})
})

app.get("/:id",  (req, res) => {
    let record = findById(students, req.params.id)
    if (!record){
        res.status = 404;
        res.json({
            error: {
                message: "No record found!"
            }
        })
    }

    res.json({data: record})
})

app.listen(process.env.PORT || 9000)
