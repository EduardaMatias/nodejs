const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const port = 3000;

const hbs = exphbs.create({
  partialsDir: 'views/partials',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/books/insertbook', (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const query = `INSERT INTO books(??, ??) VALUES (?, ?)`;
  const data = ['title', 'pageqty', title, pageqty]

  conn.query(query, data, function (err) {
    if (err) {
      return console.log(err);
    }

    res.redirect('/');
  });
});

app.post('/books/editbook/:id', (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;
  const id = req.params.id;

  const query = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
  const data = ['title', title, 'pageqty', pageqty, 'id', id]

  conn.query(query, data, function (err) {
    if (err) {
      return console.log(err);
    }

    res.redirect('/books');
  });
});

app.post('/books/deletebook/:id', (req, res) => {
  const id = req.params.id;

  const query = `DELETE FROM books WHERE ?? = ?`;
  const data = ['id', id]

  conn.query(query, data, function (err) {
    if (err) {
      return console.log(err);
    }

    res.redirect('/books');
  });
});

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';

  conn.query(query, function (err, data) {
    if (err) {
      return console.log(err);
    }

    const books = data;

    res.render('books', { books });
  });
});

app.get('/books/:id', (req, res) => {
  const id = req.params.id;

  const query = `SELECT * FROM books WHERE ?? = ?`;
  const data = ['id', id]

  conn.query(query, data, function (err, data) {
    if (err) {
      return console.log(err);
    }

    const book = data[0];

    res.render('book', { book });
  });
});

app.get('/books/edit/:id', (req, res) => {
  const id = req.params.id;

  const query = `SELECT * FROM books WHERE ?? = ?`;
  const data = ['id', id]


  conn.query(query, data, function (err, data) {
    if (err) {
      return console.log(err);
    }

    const book = data[0];

    res.render('editbook', { book });
  });
});

app.get('/book/delete/:id', (req, res) => {
  const id = req.params.id;

  const query = `SELECT * FROM books WHERE ?? = ?`;
  const data = ['id', id]

  conn.query(query, data, function (err, data) {
    if (err) {
      return console.log(err);
    }

    const book = data[0];

    res.render('deletebook', { book });
  });
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nodemysql',
});

conn.connect(function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('✅ Banco de dados conectado!');
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
