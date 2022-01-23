import React from 'react';
import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardRedux';

const Favorite = (props) => {
  const cards = useSelector((state) => getFavoriteCards(state));
  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.favorite}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.id}>
              {card.title}

              <i
                className={clsx(
                  `fa fa-star-o`,
                  card.isFavorite && styles.favoriteCard
                )}
              ></i>
            </Card>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Favorite;
