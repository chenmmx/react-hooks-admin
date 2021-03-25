import React, { FC, useState } from 'react';
import { Dropdown, Badge, Tabs, List, Avatar } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import './index.less';

const Notification: FC = () => {
  const { TabPane } = Tabs;
  const [visible, setVisible] = useState<boolean>(false);
  const data = [
    {
      title: '你收到一封周报信息',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  const onVisibleChange = (flag: boolean): void => {
    setVisible(flag);
  };

  const overlay = (
    <div>
      <Tabs defaultActiveKey="1" centered={true}>
        <TabPane tab="通知" key="1">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="4年前"
                />
              </List.Item>
            )}
          />
          <div className="user-notice-list-bottomBar">
            <div>清空消息</div>
            <div>查看更多</div>
          </div>
        </TabPane>
        <TabPane tab="消息" key="2">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="4年前"
                />
              </List.Item>
            )}
          />
          <div className="user-notice-list-bottomBar">
            <div>清空消息</div>
            <div>查看更多</div>
          </div>
        </TabPane>
        <TabPane tab="待办" key="3">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="4年前"
                />
              </List.Item>
            )}
          />
          <div className="user-notice-list-bottomBar">
            <div>清空消息</div>
            <div>查看更多</div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );

  return (
    <Dropdown
      overlayClassName="layout-header-notice"
      overlay={overlay}
      placement="bottomRight"
      onVisibleChange={onVisibleChange}
      visible={visible}
    >
      <div className="site-layout-header-right-action user-notice">
        <Badge count={8}>
          <BellOutlined className="user-notice-icon" />
        </Badge>
      </div>
    </Dropdown>
  );
};

export default Notification;
