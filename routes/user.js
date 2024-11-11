import express from "express";
const router = express.Router();

// Mock database
var users = [
  { 
    
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
    id:"100"
  },
  {
   
    first_name: "Alice",
    last_name: "Smith",
    email: "alicesmith@example.com",
    id:"200"
  },
];

// Getting the list of users from the mock database
router.get("/", (req, res) => {
  res.send(users);
});

//get specific user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// delete api
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`${id} deleted successfully from database`);
});

//update api
router.patch("/update/:id", (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, email } = req.body;

  const user = users.find((user) => user.id === id);

  if (first_name) user.first_name = first_name;
  if (last_name) user.last_name = last_name;
  if (email) user.email = email;

  res.send(`User with the ${id} has been updated`);
});
export default router;
