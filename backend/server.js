 const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let notes = [];
let idCounter = 1;

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  const note = { id: idCounter++, text };
  notes.push(note);
  res.status(201).json(note);
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  res.status(204).send();
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
