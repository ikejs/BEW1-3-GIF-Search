require('dotenv').config({ path: '.env' });
const express = require('express')
const app = express();
const exphbs  = require('express-handlebars');
const https = require('https');
const Tenor = require("tenorjs").client({
  "Key": process.env.TENOR_API_KEY,
  "Filter": "high",
  "Locale": "en_US"
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
  term = ""
  results = [];
  if (req.query.term) {
      term = req.query.term
  }
  Tenor.Search.Query(term, "10")
      .then(response => {
          const gifs = response;
          res.render('home', { gifs })
      }).catch(console.error);
});

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});
