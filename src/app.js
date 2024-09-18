const express = require('express');
const app = express();

// app.use('/', (req, res) => {
//   res.send('ddd');
// });
// app.use('/hello', (req, res) => {
//   res.send('hello');
// });
app.use('/hello/1', (req, res) => {
  res.send('h2');
});
app.use('/hello', (req, res) => {
  res.send('ddd');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serve   ${PORT}`);
});
