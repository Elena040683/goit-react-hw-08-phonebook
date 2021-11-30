import React from 'react';
import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      Welcome to the phonebook service for storing your contacts, please sign up
      or log in, go ahead ...
    </h1>
  </div>
);

export default HomeView;
