const mongoose = require('mongoose');


// returns promise
mongoose.connect("mongodb://127.0.0.1:27017/fromVS").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err)
})

// unlike shell we cant add what ever we want we need schema
const student = new mongoose.Schema({
    name:{type: String, required: true},
    workout:{type: Boolean, required: true},
    height: Number
})


// making model - model is like collection
const Student = new mongoose.model("Student", student);


//process one
// const adder = async () => {
//     // creating
//     const ss = new Student({
//         name: "Kushal",
//         workout: true,
//         height: 6
//     })

//     const secnd = new Student({
//         name: "saugat",
//         workout: true,
//         height: 6
//     })

//     await ss.save();
//     await secnd.save();
// }

// adder();


/* Process two */

// const adder = async () => {
//     const ss =await Student.create({
//         name: "ram",
//         workout: true, 
//         height: 7
//     })

//     console.log(ss)
// }

// adder();



/**--------------------- */
// Reading from Mongo

const finder = async () => {
    //const ss = await Student.find();

    const heightSix = await Student.find({height:{$eq:5}}) // eq = equal
    console.log(heightSix)

    const heightgreaterthan = await Student.find({height:{$gte:6}}) // greater than equal to
    console.log(heightgreaterthan)

    // gt, lt, lte(less than equal to --- docs query selector

    const inrange = await Student.find({height: {$in:[6,7]}})
    console.log(inrange)

    // if $nin = then it means expect theses show all
}

finder();