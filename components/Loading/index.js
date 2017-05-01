// @flow
import React from 'react';
import style from './style.css';

const Loading = () => (
  <div className={style.loading}>
    <div className={style.loadingBar} />
    <div className={style.loadingBar} />
    <div className={style.loadingBar} />
    <div className={style.loadingBar} />
  </div>
);

export default Loading;
