const app = require('express')();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
  res.render('hello-gif', { 
    gifUrl
  });
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
