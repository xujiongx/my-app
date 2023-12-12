import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import styles from './index.module.less';
import { TABBAR_LIST } from './const';

const Bottom: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const isTabbarPage = TABBAR_LIST.map((item) => item.key).includes(pathname);

  if (!TABBAR_LIST.length || !isTabbarPage) {
    return null;
  }

  return (
    <TabBar
      activeKey={pathname}
      onChange={(value) => setRouteActive(value)}
      className={styles['myy-tabbar']}
    >
      {TABBAR_LIST.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Bottom;
