import React from 'react';
import { Outlet } from 'umi';
import styles from './index.less';

const Layout: React.FC = () => {
  return (
    <div className={styles.navs}>
      <Outlet />
    </div>
  );
};

export default Layout;
