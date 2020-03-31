const app = require('express')();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  console.log(req.query);
  res.render('home');
});

app.get('/greetings/:name', (req, res) => {
  const name = req.params.name;
  res.render('greetings', { 
    name
  });
});

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});
