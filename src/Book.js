import React from 'react';
import { Link } from 'react-router-dom';

export default function Book({ book }) {
  return (
    <Link to={`/books/${book.id}`}> <div className='book'>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>genre:{book.genre}</p>
      <p>pages:{book.pages}</p>
    </div>
    </Link>
  );
}
