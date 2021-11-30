// import ContactForm from '../../components/ContactForm/ContactForm';
// import Filter from '../../components/Filter/Filter';
// import ContactList from '../../components/ContactList/ContactList';

// const ContactsView = () => {
//   return (
//     <div>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };

// export default ContactsView;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './ContactsView.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={s.flexbox}>
        <div className={s.flexboxitem}>
          <h2 className={s.title}>Add new contact</h2>
          <ContactForm />
        </div>
        <div className={s.flexboxitem}>
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <ContactList className={s.contactlist} />
        </div>
      </div>
    </>
  );
}
