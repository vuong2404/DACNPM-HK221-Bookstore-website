const express = require("express");
let cors = require("cors");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

let bodyParse = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to iceTea Book API!" });
});

require("./routes/order.routes")(app);
require("./routes/address.routes")(app);
require("./routes/cart.routes")(app);
require("./routes/user.routes")(app);
require("./routes/book.routes")(app);
require("./routes/belong.routes")(app);
require("./routes/feedback.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
