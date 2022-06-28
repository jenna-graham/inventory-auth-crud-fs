import { client } from './client';

export async function deleteBook(id) {
  const { data } = await client.from('Books').delete().match({ id: id }).single();
  return data;
}

export async function updateBook(book, id) {
  const { data } = await client.from('Books').update(book).match({ id: id }).single();
  return data;
}
export async function getBookById(id) {
  const { data } = await client.from('Books').select('*').match({ id }).single();
  return data;
}
export async function getBooks() {
  const { data } = await client.from('Books').select('*');
  
  return data;
}

export async function addBook(book) {
  
  const { data } = await client.from('Books').insert(book).single();
  return data;
}
export async function signUp(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });
  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });
  return user;
      
}
export async function signOut() {
  await client.auth.signOut();
}