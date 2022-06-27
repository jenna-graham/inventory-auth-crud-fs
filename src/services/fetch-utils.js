import { client } from './client';

export async function addBook(book) {
  console.log(book);
  const { data, error } = await client.from('Books').insert(book).single();
  console.log(error);
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
  console.log('logged out');
  const { error } = await client.auth.signOut();
}