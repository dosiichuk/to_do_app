import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
import { addToFavorites } from '../../redux/store';

const Column = (props) => {
  const cards = useSelector((state) => getFilteredCards(state, props.id));
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(addToFavorites(id));
  };
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${props.icon}`}></span>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id}>
            {card.title}

            <i
              className={clsx(
                `fa fa-star-o`,
                card.isFavorite && styles.favorite
              )}
              onClick={() => handleClick(card.id)}
            ></i>
          </Card>
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
