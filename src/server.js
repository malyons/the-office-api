import express from 'express';
import setupMiddleware from './middleware';

const app = express();

setupMiddleware(app);

app.use('/testing', (req, res) => {
  res.status(333).json({ fuck: 'no!' });
});

// catch-all
app.all('*', (req, res) => {
  res.status(200).json({ ok: true });
});

export default app;
