import React from 'react';
import { useState } from 'react';
import { addBook } from './services/fetch-utils';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    const book = await addBook({
      title: title,
      author: author,
      genre: genre,
      pages: pages
    });
    console.log(book);
    setTitle('');
    setAuthor('');
    setGenre('');
    setPages('');

  }
  return (
    <div>
      <h2>Create a book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input onChange={e => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          Author:
          <input onChange={e => setAuthor(e.target.value)} value={author} />
        </label>
        <label>
          Genre:
          <input onChange={e => setGenre(e.target.value)} value={genre} />
        </label>
        <label>
          Pages:
          <input onChange={e => setPages(e.target.value)} value={pages} />
        </label>
        <button>Add Book!</button>
      </form>
    </div>
  );
}
