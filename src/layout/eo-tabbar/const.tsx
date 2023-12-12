import {
  AppOutline,
  UserOutline,
} from 'antd-mobile-icons';
import React from 'react';

export const TABBAR_LIST = [
  {
    key: '/',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: '/my',
    title: '我的',
    icon: <UserOutline />,
  },
];
