const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb+srv://lhuber:PandasAce123@crudtesting.dxxcmnk.mongodb.net/"); //For some reasons save in the collection called "test"
/*
//Logan Huber's Code of Suffering :)
//Create Structure schema for House Entry
const houseSchema = new mongoose.Schema({
    structure_id: { type: Number, min: 1, max: 9999, required: true },
    structure_type: { type: String, default: "house", required: true },
    user_id: { type: Number, min: 1, max: 9999 },
    images: { type: Array, items: {type: String, uniqueItems: true}},
    tags: { type: Array, items: {type: String, uniqueItems: true}},
    files: { type: Array, items: {type: String, uniqueItems: true}}
});*/
//Create Structure schema for Object
const objectSchema = new mongoose.Schema({
    structure_id: { type: Number, min: 1, max: 9999, required: true },
    structure_type: { type: String, default: "object", required: true },
    user_id: { type: Number, min: 1, max: 9999 },
    images: { type: Array, items: {type: String, uniqueItems: true}},
    tags: { type: Array, items: {type: String, uniqueItems: true}},
    files: { type: Array, items: {type: String, uniqueItems: true}}
});



//create a house model and creating an Object Model
//const House = mongoose.model("Houses", houseSchema);
const Object = mongoose.model("Objects", objectSchema);
const app = express(); //Create route to create a Collects group
app.use(cors());
app.use(express.json())


/*
///Section for callling Router / Midddle ware shit
const catalogRouter = require('./routes/catalog') //Testing for blogs
//app.use('/catalog', catalogRouter) //So whenever localhost:9090/catalog or other subnets /catalog/tester will be called goes here
*/
const catalogRouter = require('./routes/catalog')
const blogsRouter = require('./routes/blogs') //Testing for blogs
//app.use('/blogs', blogsRouter)



///Section for callling Router / Midddle ware shit
/*
//create route to create a OBJECT 
app.get("/blogs/test", async(req, res) => {
    const obj = new Object({
        structure_id: 1,
        tags: "Broke Object",
 });
                //IT (Totally Good words towards code) WORKS
 // Adding record using save() method 
 // and replacing call back function with await
 try {
    const wasd = await House.findOne({ structure_type: "house"});
    const result1 = await House.findOne({ structure_type: "house"});
    //res.send({data : wasd});
    //console.log({data : wasd});
   
    //console.log({data : wasd._id.valueOf()});
    //const waya = String(wasd._id.valueOf());
    //res.send({data : wasd});
    //res.send({data : "123"});
    const weee = wasd._id.toString(); //let
    firstPageLoad = weee
    console.log(weee);
    //res.send({data : weee});

    //const result1 = await obj.save();
    console.log(result1);
    res.render

    res.send("The object with id " + result1._id + "is displayed");
} catch (err) {
    console.log(err);}
});
*****/


/*

//create route to create a OBJECT 
app.get("/createo", async(req, res) => {
    const obj = new Object({
        structure_id: 1,
        tags: "Broke Object",
 });
                //IT (Totally Good words towards code) WORKS
 // Adding record using save() method 
 // and replacing call back function with await
 try {
    const result1 = await obj.save();
    console.log(result1);
    res.send("The object with id " + result1._id + "is inserted");
} catch (err) {
    console.log(err);}
});

*/


//Server starts listening //9090 //orig 3000 //9090
app.listen(9090, function() {
    console.log("Server is listening at port 9090"); //9090
});
app.use('/catalog', catalogRouter)
app.use('/blogs', blogsRouter)
//app.use('/catalog', catalogRouter)

/*
//was /info
//app.get('*') --> the .js file path to route the call to
//Another test for sending data to client WORKS FOR STRing
app.post('/blogs', async (req, res) => { //orig no ASYNC //WAS POST --? get
    //const wasd = await House.findOne({ structure_type: "house"}, { _id: 1 });////
    const wasd = await House.findOne({ structure_type: "house"});
 
    console.log({data : wasd});
    const weee = wasd._id.toString(); //+ oii; //let
    console.log(weee);
    //console.log(req.params.id)

    //wasd
    //if()
    //res.send({data : wasd});

    //below work
    //res.send({data : weee});
    //let asdw = req.body.
    res.send({data : "just blogs"});
});

///////////////////1111111111111111111111111111111111

//Test for checking a Collection named Object
app.get("/catalog",async(req,res)=> { //IT TRULY WORKS
    //Test query
    const ayyy = await Object.findOne({ structure_type: "object"}, { _id: 1 });
    console.log({data : ayyy});
    console.log(ayyy);
    console.log(ayyy._id);
    console.log(ayyy._id.valueOf()); // what i want
})



//trying to follow w this youtube video
//https://video.search.yahoo.com/video/play;_ylt=AwrEtZAdHABmrLgsmpb7w8QF;_ylu=c2VjA3NyBHNsawN2aWQEZ3BvcwMz?p=using+node.js+and+express.js+to+send+data+between+server+and+client&vid=1ac79e560f6b90951285a0204468c967&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOVP.r57-EqqbM1r8sWjiNxIH4QHgFo%26pid%3DApi%26h%3D360%26w%3D480%26c%3D7%26rs%3D1&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfgTGADljAeg&tit=Build+A+REST+API+With+Node.js%2C+Express%2C+%26amp%3B+MongoDB+-+Quick&c=2&sigr=fE89ex0i4mZZ&sigt=qdWqUvuSNm1i&sigi=71E6nBu0gw9F&fr=p%3As%2Cv%3Av&h=360&w=480&l=1736&age=1557842410&fr=mcafee&type=E210US105G0&tt=bhttp

//const subRouter = requre('./routes/subscribers');
//app.use('/subscribers', subRouter)
// 'localhost:3000/subscribers'






//////3-25-24 Creating Test Enteries for houses
app.get("/createh", async(req, res) => {

var HOUSES = []

for (let i = 1; i <= 10; i++) {
    let haha = new House({
        structure_id: i,
        tags: "residential",
        images: ["https://www.bradley.edu/asset/img/bradleyHall.svg"],
    })
    HOUSES.push(haha);
}

 // Adding record using save() method 
 // and replacing call back function with await
 try {
    let truth = []
    for(let y = 0; y < HOUSES.length; y++) {
        let result1 = await HOUSES[y].save();

        console.log(result1);
        truth.push("The house with id " + result1._id + "is inserted");
    }
    res.send(truth);
} catch (err) {
    console.log(err);}
});



////TEST with pulling an entry -->
//Another test for sending data to client WORKS FOR STRing

//https://masteringjs.io/tutorials/express/post
app.post('/oneEntry', async (req, res) => { //orig no ASYNC //WAS POST --? get
    //const wasd = await House.findOne({ structure_type: "house"}, { _id: 1 });////
    const wasd = await House.findOne({ structure_type: "house"});

    console.log({data : wasd});

    const weee = wasd._id.toString(); //+ oii; //let
    console.log(weee);

    res.send({data : weee});
});


*/