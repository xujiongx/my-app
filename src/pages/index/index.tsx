import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import Banner from '../../components/banner';
import { EOIcon } from '../../components/eo-Icon';

const imgOptions = [
  {
    actionUrl: 'https://www.baidu.com/',
    id: 'XFzzem8KiEmkFKEJ',
    imgUrl:
      'https://test-zhyq-minio-api-inner-myypark.myscrm.com.cn/test-zhyq-new/pc/p/myyparktest/myypark-forum/upload-file/2023/11/24/d3d0124eafc24fa9994b9c05e7e98a74-1700795824831.webp',
    name: 'baidu',
  },
  {
    actionUrl: '/dynamic/circle_detail?id=922857660225818624',
    id: 'JTEYwweiybCyncZG',
    imgUrl:
      'https://test-zhyq-minio-api-inner-myypark.myscrm.com.cn/test-zhyq-new/pc/p/myyparktest/myypark-forum/upload-file/2023/11/24/19b1762487b8436fa04c97cfb87f8ca7-1700795848262.png',
    name: 'A股',
  },
];

const Page = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['page']}>
      <Banner options={imgOptions} isNotLoadGlobalConfig={false} />
      <EOIcon
        type='eo-circle'
        style={{
          fontSize: '12px',
        }}
      />
      <button onClick={() => navigate('/my')}>我的</button>
    </div>
  );
};

export default Page;
