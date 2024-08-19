import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./controllers/routers.js";
import { Project } from "./models/usermodel.js";
import bodyParser from 'body-parser';

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit :"40kb",extended:true}))
app.get("/home",(req,res)=>{
    res.send("done")
})

app.post('/carding', async (req, res) => {
    const { title, description } = req.body;
  
    try {
      
      const newCard = new Project({ title, description });
      
      // Save the card to the database
      await newCard.save();
      
      // Send a success response with the saved card
      res.status(201).json(newCard);
    } catch (error) {
      // Handle any errors that occur during saving
      res.status(500).json({ message: 'Error creating card', error });
    }
  });
app.get('/projects', async (req, res) => {
    try {
      // Fetch all cards from the database
      const cards = await Project.find({});
      
      // Send the cards as a JSON response
      res.json(cards);
    } catch (error) {
      // Handle any errors that occur during the database query
      res.status(500).json({ message: 'Error retrieving cards', error });
    }
  });

  app.get('/cards/:title', async (req, res) => {
    const { title } = req.params;
  
    try {
      // Find the card by title
      const card = await Project.findOne({ title });
  
      if (card) {
        // If the card is found, return it
        res.json(card);
      } else {
        // If no card is found, return a 404 status with a message
        res.status(404).json({ message: 'Card not found' });
      }
    } catch (error) {
      // Handle any errors that occur during the query
      res.status(500).json({ message: 'Error retrieving card', error });
    }
  });

app.use("/api/v1/projects",router)

const start=async()=>{
    app.set("mongo_user")
    const connectdb=await mongoose.connect("mongodb+srv://yakshita178:X2ebyX9nNfzphUyO@company.ldrba.mongodb.net/")
    console.log(`connect host ${connectdb.connection.host}`)
    app.listen(8000,()=>{
        console.log("listing")
    })
}

start();