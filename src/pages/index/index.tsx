import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less'

const Page = () => {
  const navigate = useNavigate();
  const a = 1;
  return (
    <div className={ styles['page']}>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
      <p> hello world{a}</p>
     
      <button onClick={() => navigate('/my')}>我的</button>
    </div>
  );
};

export default Page;
