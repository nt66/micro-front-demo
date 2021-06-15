import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import MicroAppWrapper from './MicroAppWrapper';
import styles from './Welcome.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => {
  const intl = useIntl();

  // 子应用回调
  const fcb = (value)=>{
    alert(`子应用回调:${value}`);
  }

  return (
    <PageContainer>
      <Card>
        {/* <h2>微前端测试页面</h2> */}
        {/* <h3>iframe方式</h3> */}
        {/* <iframe src="//localhost:3000/" className={styles.iframe}></iframe> */}
        <MicroAppWrapper
          name="my-react-test"
          appProps={{
            price:100,
            costomer:'lingfeng',
            cb:fcb
          }}
          entry={'//127.0.0.1:3000/'}
        />
      </Card>
    </PageContainer>
  );
};
