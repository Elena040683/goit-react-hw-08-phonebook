import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import s from './ContactsView.module.css';

const ContactsView = () => {
  return (
    <div className={s.container}>
      <ContactForm />

      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default ContactsView;
