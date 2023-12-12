import React, { FC } from 'react';
import { SafeArea } from 'antd-mobile';
import EOTabBar from './eo-tabbar';
import styles from './index.module.less';

interface Props {
  children?: any;
}

const Layout: FC<Props> = (props) => {
  return (
    <div className={styles['app']}>
      <div className={styles['body']}>{props.children}</div>
      <EOTabBar />
      <SafeArea position={'bottom'} />
    </div>
  );
};

export default Layout;
