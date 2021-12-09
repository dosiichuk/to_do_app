import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title }, props.columnId);
        setTitle('');
    }
    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add item</Button>
        </form>
    )
}

export default CardForm;