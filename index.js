const express = require('express');
const { walletService } = require('web3-wallet-kit');

const app = express();

app.get('/api/create-wallet', (req, res) => {
  const wallet = walletService.generateMnemonic();
  res.json(wallet);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
