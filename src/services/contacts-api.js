import axios from 'axios';

axios.defaults.baseURL =
  'https://6485e0e1a795d24810b76d87.mockapi.io/contacts/';

export const getContacts = async () => {
  const { data } = await axios.get();
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(id);
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('', contact);
  return data;
};
