import React from 'react';
import { Outlet } from 'umi';
import { Layout } from 'antd';
import styles from './index.less';

const { Header, Footer, Content } = Layout;

const PageLayout: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}></Header>
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default PageLayout;
