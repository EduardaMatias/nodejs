const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

const User = require('./models/User');
const Address = require('./models/Address');

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

app.get('/', function (req, res) {
  User.findAll({ raw: true })
    .then((users) => {
      console.log(users);
      res.render('home', { users: users });
    })
    .catch((err) => console.log(err));
});

app.get('/users/create', function (req, res) {
  res.render('adduser');
});

app.post('/users/create', async function (req, res) {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  await User.create({ name, occupation, newsletter });

  res.redirect('/');
});

app.get('/users/:id', function (req, res) {
  const id = req.params.id;

  User.findOne({
    raw: true,
    where: {
      id: id,
    },
  })
    .then((user) => {
      console.log(user);
      res.render('userview', { user });
    })
    .catch((err) => console.log(err));
});

app.post('/users/delete/:id', async function (req, res) {
  const id = req.params.id;

  await User.destroy({
    where: {
      id: id,
    },
  });
  res.redirect('/');
});

app.get('/users/edit/:id', async function (req, res) {
  const id = req.params.id;

  const user = await User.findOne({
    include: Address,
    where: {
      id: id,
    },
  });

  res.render('useredit', { user: user.get({ plain: true }) });
});

app.post('/users/update', async function (req, res) {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };

  console.log(req.body);
  console.log(userData);

  await User.update(userData, {
    where: {
      id: id,
    },
  });
  res.redirect('/');
});

app.post('/address/create', async function (req, res) {
  const UserId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;

  const address = {
    street,
    number,
    city,
    UserId,
  };

  await Address.create(address);
  res.redirect(`/users/edit/${UserId}`);
});

app.post('/address/delete/', async function (req, res) {
  const id = req.body.id;

  await Address.destroy({
    where: {
      id: id,
    },
  });
  res.redirect('/');
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
