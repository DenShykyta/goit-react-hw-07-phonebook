import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contactsThunk';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
  const { isLoading, items, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Form />
      <Filter />
      {isLoading && <div>Loading...</div>}
      {items && <ContactList />}
      {error && <h2>{error}</h2>}
    </div>
  );
}
