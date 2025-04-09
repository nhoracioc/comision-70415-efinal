import mongoose, { Error } from "mongoose";

//Concetar con MongoDB Atlas
mongoose.connect("mongodb+srv://nhoracioc:coderhouse@cluster0.vcanj.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectado a la BD"))
    .catch((error) => console.log("No se Conecto a la BD. Error: " + error))