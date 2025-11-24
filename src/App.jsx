import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddBook from './components/AddBook';
import BookGrid from './components/BookGrid';
import './App.css'

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    fetch('https://bookstore-82805-default-rtdb.europe-west1.firebasedatabase.app/books/.json')
    .then(response => response.json())
    .then(data => addKeys(data))
    .catch(err => console.error(err))
  }

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const booksWithKeys = Object.values(data).map((book, index) => 
    Object.defineProperty(book, 'id', {value: keys[index]}));
    setBooks(booksWithKeys);
  }

  const addBook = (newBook) => {
    fetch('https://bookstore-82805-default-rtdb.europe-west1.firebasedatabase.app/books/.json',
    {
      method: 'POST',
      body: JSON.stringify(newBook)
    })
    .then(() => fetchBooks())
    .catch(err => console.error(err))
  }

  const deleteBook = (Id) => {
    fetch(`https://bookstore-82805-default-rtdb.europe-west1.firebasedatabase.app/books/${Id}.json`,
    {
      method: 'DELETE',
    })
    .then(() => fetchBooks())
    .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Header />
      <AddBook addBook={addBook} />
      <BookGrid books={books} deleteBook={deleteBook} />
    </>
  )
}

export default App
