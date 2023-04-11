const express = require('express');
const path = require('path');
const router = express.Router();

const basePath = path.join(__dirname, '../templates');


router.post('/login', (req, res) => {
  console.log(`Email: ${req.body.email}\nSenha: ${req.body.senha}`);
  res.redirect('/users/home');
});

router.get('/login', (req, res) => {
  res.sendFile(`${basePath}/login.html`);
});

router.get('/home', (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

module.exports = router;
