import { client } from './client';
export async function getBooks() {
  const { data, error } = await client.from('Books').select('*');
  
  return data;

}

export async function addBook(book) {
  
  const { data, error } = await client.from('Books').insert(book).single();
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
  const { error } = await client.auth.signOut();
}