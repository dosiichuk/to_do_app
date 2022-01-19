import React from 'react';
import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';

const About = (props) => {
  return (
    <div className={styles.about}>
      <Container>
        <PageTitle>About</PageTitle>
        <p>Lorem ipsum.</p>
      </Container>
    </div>
  );
};

export default About;
