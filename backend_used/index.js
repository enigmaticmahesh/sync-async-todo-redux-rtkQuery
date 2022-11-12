const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

const app = express();
app.use(cors());
app.use(express.json());

const movies = [
  {
    id: '1',
    isbn: '15327088',
    title: 'Kantara',
    director: { firstname: 'Rishab', lastname: 'Shetty' },
  },
  {
    id: '2',
    isbn: '11953248',
    title: 'Garuda Gamana Vrishabha Vahana',
    director: { firstname: 'Raj', lastname: 'Shetty' },
  },
];

app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

app.post('/movies', (req, res) => {
  const newMovie = req.body;
  newMovie.id = nanoid();
  movies.push(newMovie);
  res.status(200).json({
    message: 'New Movie Added Successfully',
  });
});

app.delete('/movies', (req, res) => {
  const { id } = req.body;
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  movies.splice(movieIndex, 1);
  res.status(200).json({
    message: 'Movie deleted Successfully',
  });
});

app.put('/movies', (req, res) => {
  const updatedMovie = req.body;
  const movieIndex = movies.findIndex((movie) => movie.id === updatedMovie.id);
  movies[movieIndex] = updatedMovie;
  res.status(200).json({
    message: 'Movie Updated Successfully',
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Mock Api',
  });
});

app.listen(5001, 'localhost', () => console.log('Server is listening on 5001'));
