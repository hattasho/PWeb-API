const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const quote = response.data[0];
    res.render('index', { quote });
  } catch {
    res.render('index', { quote: 'Não foi possível carregar a mensagem :(' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
