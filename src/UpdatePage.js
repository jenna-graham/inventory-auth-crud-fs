import { getBookById, updateBook, deleteBook } from './services/fetch-utils';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';


export default function UpdatePage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');
  const { id } = useParams();
  const { push } = useHistory();


  useEffect(() => {
    async function fetchBook() {
      const book = await getBookById(id);

      setTitle(book.title);
      setAuthor(book.author);
      setGenre(book.genre);
      setPages(book.pages);
    }
    fetchBook();
  }, [id]);

  async function handleUpdateSubmit(e) {
    e.preventDefault();
    await updateBook({
      title: title,
      author: author,
      genre: genre,
      pages: pages,
    }, id);
    setTitle('');
    setAuthor('');
    setGenre('');
    setPages('');

    push('/books');
  }
  async function handleDeleteBook() {
    await deleteBook(id);
    push('/books');
  }


  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleUpdateSubmit}>
        <label>
          Title
          <input onChange={e => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          Author
          <input onChange={e => setAuthor(e.target.value)} value={author} />
        </label>
        <label>
          Genre
          <input onChange={e => setGenre(e.target.value)} value={genre} />
        </label>
        <label>
          Number of Pages
          <input onChange={e => setPages(e.target.value)} value={pages} />
        </label>
        <button>Update Book</button>
      </form>
      <button onClick={handleDeleteBook}>Delete Book</button>
    </div>
  );
}
