import React from 'react';
import styles from './Card.module.scss';

const Card = props => {
    return (
        <li className={styles.card} key={props.id}>{props.children}</li>
    )
}

export default Card;