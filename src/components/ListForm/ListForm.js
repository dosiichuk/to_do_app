import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listRedux';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span>Title:</span>{' '}
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <span>Description:</span>{' '}
      <TextInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
