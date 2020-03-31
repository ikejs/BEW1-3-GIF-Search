const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Squirrel');
});

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});
