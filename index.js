const express = require("express");
const CryptoJS = require("crypto-js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/encrypt", async (req, res) => {
  const encrypted = CryptoJS.AES.encrypt(
    req.body.message,
    req.body.secret
  ).toString();

  res.send({
    data: encrypted,
  });
});

app.post("/api/decrypt", async (req, res) => {
  const decrypted = CryptoJS.AES.decrypt(
    req.body.message,
    req.body.secret
  ).toString(CryptoJS.enc.Utf8);

  res.send({
    data: decrypted,
  });
});

module.exports = app;
