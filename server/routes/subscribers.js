/*
const express = require('express')
const router = express.Router()

//Have schema foe House and Objects
//as
//const Houser = require('../path)

//GEt all
router.get("/", (req, res) => {
    res.send('Hello World')
    try {
        //const subscriber =  await Subscribers.find()
        //res.json(subscribers)
    } catch(err) {

    }
})
//Get one
router.get("/:id", getSubscriber, (req, res) => {
    res.send(req.params.id)
})
//creating one
router.post("/", async (req, res) => {
    //const subscruber //= new HOUSE({
        //fill out the params
    //})

    try {
        //const newSuber = await subscruber.save()
        //res.status(201).json(newSuber)
    } catch(err) {
        //res.status(400).json({ message: err.message })
    }
    
})
//update one //Instead of PUT
router.patch("/:id", getSubscriber, (req, res) => {
    if(req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if(req.body.nam != null) {
        res.subscriber.name = req.body.name
    }

    try {
        //const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//deleting one
router.delete("/:id", getSubscriber, async (req, res) => {
    //req.params
})

function getSubscriber(req,res,next) {
    let subscriber
    try {
        //subscriber = //await getSubscriber.findByID(req.params.id)
        if(subscriber == null) {
            return res.status(404).json({ message: 'Cannot find Query'})
        }
    } catch(err) {
        return res.status(500).json({message: err.message })
    }
    //res.subscriber = subscriber
    next()
}

module.exports = router
*/