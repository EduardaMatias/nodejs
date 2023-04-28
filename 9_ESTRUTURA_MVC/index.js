const express = require('express');
const exphbs = require('express-handlebars');

const conn = require('./db/conn');
const Task = require('./models/Task');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();

const port = 3000;

const hbs = exphbs.create({
  partialsDir: 'views/partials',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static('public'));

app.use('/tasks', tasksRoutes);

conn
  .sync()
  .then(() => {
    console.log(`✅ ...Rodando em http://localhost:${port}`);
    app.listen(port);
  })
  .catch((err) => console.log(err));
