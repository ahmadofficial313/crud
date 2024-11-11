import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

// Adding users to our mock database

router.post("/", (req, res) => {
  const { first_name, last_name } = req.body;
  users.push({id: uuidv4(),first_name, last_name });

  res.send(`${first_name} ${last_name} has been added to the Database`);
});

export default router;
