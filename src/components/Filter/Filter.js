import actions from '../../redux/contacts/actions';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';

const Filter = () => {
  const contacts = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        value={contacts}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
