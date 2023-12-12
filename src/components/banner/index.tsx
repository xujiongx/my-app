import React, { CSSProperties, FC } from 'react';
import { Skeleton, Swiper } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

interface Props {
  style?: CSSProperties;
  options: any[];
  isNotLoadGlobalConfig?: boolean;
}

const Banner: FC<Props> = (props) => {
  const navigate = useNavigate();
  const { style, options, isNotLoadGlobalConfig = true } = props;

  const handleJump = (url: string) => {
    if (url.startsWith('https://')) {
      window.open(url);
      return;
    }
    navigate(url);
  };

  if (isNotLoadGlobalConfig) {
    return (
      <div className={styles['skeleton']}>
        <Skeleton animated className={styles['content']} />
      </div>
    );
  }
  if (!options.length) return null;

  return (
    <Swiper className={styles['component']} style={{ ...style }}>
      {options.map((item) => (
        <Swiper.Item
          key={item.id}
          className={styles.content}
          onClick={() => {
            handleJump(item.actionUrl);
          }}
        >
          <img src={item.imgUrl} alt='' />
        </Swiper.Item>
      ))}
    </Swiper>
  );
};

export default Banner;
