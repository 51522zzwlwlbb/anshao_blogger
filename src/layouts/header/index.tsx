import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const BlogHeader: React.FC = () => {
  return (
    <Layout>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  );
};

export default BlogHeader;
