import React from 'react';
import { useState, useEffect } from 'react';
import { getBooks } from './services/fetch-utils';
import Book from './Book.js';

export default function ListPage() {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    const books = await getBooks();
    setBooks(books);
  }
  useEffect(() => {
    fetchBooks();
  }, []);
  

  return (
    <div className='list-page'>
      {
        books.map((book, i) => <Book book={book} key={book.author + book.title + i} />)}
    </div>
  );
}
