const express = require('express');
const app = express();
const PORT = 5000;
const allowOrigin = require('./Middleware/allowOrigin');
const loginRouter = require('./Controllers/LoginController');

app.use(express.json());
app.use(allowOrigin);

app.get("/", (req, res)=>{
  res.json({
    Msg: "get response...."
  });
});

/////////// Routes /////////////////

// Login or Signup
app.use("/api", loginRouter);

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
});