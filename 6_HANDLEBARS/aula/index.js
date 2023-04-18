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

app.get('/dashboard', (req, res) => {
  const itens = [
    { id: 1, nome: 'item a' },
    { id: 2, nome: 'item b' },
  ];

  res.render('dashboard', { itens });
});

app.get('/post', (req, res) => {
  const post = { title: 'Aprender Node.js', cat: 'Javascript', coments: 4 };

  res.render('blogpost', { post });
});

app.get('/blog', (req, res) => {
  const posts = [
    { title: 'Aprender Node.js', cat: 'Javascript', coments: 4 },
    { title: 'Introdução ao React', cat: 'Javascript', coments: 8 },
    { title: '10 dicas de produtividade', cat: 'Produtividade', coments: 2 },
    { title: 'As vantagens do trabalho remoto', cat: 'Carreira', coments: 6 },
    {
      title: 'O futuro da inteligência artificial',
      cat: 'Tecnologia',
      coments: 12,
    },
  ];

  res.render('blog', { posts });
});

app.get('/', (req, res) => {
  const user = {
    name: 'Eduarda',
    surname: 'Matias',
  };

  const auth = true;

  const approved = false;

  res.render('home', { user, auth, approved });
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
