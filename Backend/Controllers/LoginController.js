let loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../Utils/SECRET");
const {emailValidator} = require('../Utils/Constant');
const {schema} = require('../Utils/Constant');

let db = [
  // { Username: "admin@admin.com", Password: "12345" },
  // { Username: "user@user.com", Password: "12345" },
];

loginRouter.post("/signup", async (req, res) => {
  let { Username, Password } = req.body;
  console.log(Username);
  console.log(Password);
  
  const isEmailValid = emailValidator.test(Username);
  if(isEmailValid){
    const isPasswordValid = schema.validate(Password);
    if(isPasswordValid){
      Password = await bcrypt.hash(Password, 10);
      const Token = jwt.sign({Username, Password}, SECRET, {expiresIn:"24hr"});
      db.push({Username, Password});
      res.json({
        Msg: "Signup successful",
        Success: 1,
        Token,
      });
    }else{
      res.json({
        Msg: "Password length must be greater than or equal to 5",
        Success: 0,
      });
    }
  }else{
    res.json({
      Msg: "Username invalid",
      Success: 0
    });
  }
  
});

loginRouter.post("/login", async (req, res) => {
  let { Username, Password } = req.body;
  let result = db.find((user) => user.Username == Username);

  if (result) {
    const pwcheck = await bcrypt.compare(Password, result.Password);
    if (pwcheck) {
      const Token = jwt.sign({ Username, Password }, SECRET, {
        expiresIn: "24hr",
      });
      res.json({
        Msg: "Login successfull",
        Success: 1,
        Token,
        Username
      });
    } else {
      res.json({
        Msg: "Invalid password",
        Success: 0,
      });
    }
  } else {
    res.json({
      Msg: "Login failled",
      Success: 0,
    });
  }
});

module.exports = loginRouter;
