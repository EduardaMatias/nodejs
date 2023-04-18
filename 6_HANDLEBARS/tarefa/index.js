const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const port = 3000;

const hbs = exphbs.create({
  partialsDir: 'views/partials',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const products = [
  {
    id: 1,
    title: 'Livro',
    price: 40.0,
  },
  {
    id: 2,
    title: 'Camiseta',
    price: 25.0,
  },
  {
    id: 3,
    title: 'Fone de Ouvido',
    price: 60.0,
  },
  {
    id: 4,
    title: 'Caneca',
    price: 10.0,
  },
  {
    id: 5,
    title: 'Mouse',
    price: 30.0,
  },
  {
    id: 6,
    title: 'Teclado',
    price: 80.0,
  },
  {
    id: 7,
    title: 'Mochila',
    price: 50.0,
  },
  {
    id: 8,
    title: 'Luminária',
    price: 15.0,
  },
  {
    id: 9,
    title: 'Carregador Portátil',
    price: 70.0,
  },
  {
    id: 10,
    title: 'Óculos de Sol',
    price: 100.0,
  },
  {
    id: 11,
    title: 'Calça',
    price: 80.0,
  },
  {
    id: 12,
    title: 'Boné',
    price: 30.0,
  },
];

app.get('/', (req, res) => {
  res.render('home', { products });
});

app.get('/product/:id', (req, res) => {
  const product = products[parseInt(req.params.id - 1)];
  res.render('product', { product });
});

app.get('/buy/:id', (req, res) => {
  const product = products[parseInt(req.params.id - 1)];
  res.render('buy', { product });
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
