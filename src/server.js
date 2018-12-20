import express from 'express';
import setupMiddleware from './middleware';
import prisma from './db';

const app = express();

setupMiddleware(app);

app.use('/testing', (req, res) => {
  res.status(333).json({ fuck: 'yes!' });
});

app.get('/seasons', async (req, res) => {
  try {
    const response = await prisma.seasons();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.post('/seasons', async (req, res) => {
  try {
    const response = await prisma.createSeason(req.body);
    res.status(201).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
});

// catch-all
app.all('*', (req, res) => {
  res.status(200).json({ ok: true });
});

export default app;
