import styles from './ContactList.module.css';
import Contact from '../OneContact/OneContact';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
