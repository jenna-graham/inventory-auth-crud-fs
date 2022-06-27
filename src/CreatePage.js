import React from 'react';
import { useState } from 'react';
import { addBook } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');
  const { push } = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    
    await addBook({
      title: title,
      author: author,
      genre: genre,
      pages: pages
    });
    
    setTitle('');
    setAuthor('');
    setGenre('');
    setPages('');

    push('/books');

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
