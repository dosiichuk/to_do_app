import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { updateSearchTerm } from '../../redux/searchTermRedux';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    dispatch(updateSearchTerm({ searchTerm: '' }));
  }, []);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSearchTerm({ searchTerm }));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search..."
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
