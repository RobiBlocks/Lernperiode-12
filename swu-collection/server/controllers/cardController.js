import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import { Card } from "../models/CardModel.js";

const createCard = async (req, res) => {
  const { number, amount } = req.body;
  try {
    const card = await Card.create({ number, amount });
    const collection = await db.collection("cards");
    const result = await collection.insertOne(card);
    res.status(204).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({"Error adding card": err.message});
  }
}

const getAllCards = async (req, res) => {
  let collection = await db.collection("cards");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
}

const getCardById = async (req, res) => {
  let collection = await db.collection("cards");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) {
    res.send({ message: "Card not found" }).status(404);
  } else {
    res.send(result).status(200);
  }
}

const updateCardById = async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        number: req.body.number,
        amount: req.body.amount,
      },
    };

    let collection = await db.collection("cards");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
}

const deleteCardById = async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
}

module.exports = {
  createCard,
  getAllCards,
  getCardById,
  updateCardById,
  deleteCardById
};