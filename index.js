import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import userRoutes1 from "./routes/user1.js";



const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use("/user", userRoutes)

app.use("/user1", userRoutes1);


app.get("/", (req, res) => {
  console.log("[GET ROUTE]");
  res.send("HELLO FROM HOMEPAGE");
});



app.listen(port, () =>
  console.log(`Server running on port: http://localhost:${port}`)
);
