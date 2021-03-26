import React, { FC, useContext } from 'react';
import { Context } from '../../index';
import { CHANGE_SELECT_COMMENT_ID, OPEN_MODAL, CHANGE_MODAL_TYPE } from '../../context';
import { Button, Input, List, Avatar, Badge } from 'antd';
import { UsergroupAddOutlined, PlusCircleOutlined } from '@ant-design/icons';

const data = [
  {
    id: '1',
    name: '张三',
    latestNews: '你是傻逼吗？啊？',
    time: '昨天',
    messageCount: 12,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '2',
    name: '李四',
    latestNews: '周末一起出去玩啊',
    time: '11:05 AM',
    messageCount: 0,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '3',
    name: '王小二',
    latestNews: 'Hello!',
    time: '03:42 PM',
    messageCount: 0,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '4',
    name: '葛二蛋',
    latestNews: '你是傻逼吗？啊？',
    time: '前天',
    messageCount: 0,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '5',
    name: '葛二蛋',
    latestNews: '你是傻逼吗？啊？',
    time: '前天',
    messageCount: 0,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '6',
    name: '葛二蛋',
    latestNews: '你是傻逼吗？啊？',
    time: '前天',
    messageCount: 0,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '7',
    name: '葛二蛋',
    latestNews: '你是傻逼吗？啊？',
    time: '前天',
    messageCount: 0,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '8',
    name: '葛二蛋',
    latestNews: '你是傻逼吗？啊？',
    time: '前天',
    messageCount: 0,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '9',
    name: '葛二蛋',
    latestNews: '你是傻逼吗？啊？',
    time: '前天',
    messageCount: 0,
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
];

const SidebarMessage: FC = () => {
  const { state, dispatch } = useContext(Context);
  const onMessageClick = (id: string): void => {
    if (dispatch) {
      dispatch({ type: CHANGE_SELECT_COMMENT_ID, data: id });
    }
  };
  const onAddUserGroup = (): void => {
    if (dispatch) {
      dispatch({ type: OPEN_MODAL });
      dispatch({ type: CHANGE_MODAL_TYPE, data: { type: 'add_group', title: '新增分组' } });
    }
  };

  return (
    <div className="sidebar sidebar-message">
      <header>
        <span>消息</span>
        <div className="btn-group">
          <Button icon={<UsergroupAddOutlined />} onClick={onAddUserGroup} />
          <Button icon={<PlusCircleOutlined />} />
        </div>
      </header>
      <div className="search-form">
        <Input placeholder="搜索聊天" size="large" />
      </div>
      <div className="sidebar-body" tabIndex={2}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              className={state.id === item.id ? 'active' : ''}
              onClick={() => {
                onMessageClick(item.id);
              }}
            >
              <List.Item.Meta
                avatar={
                  <Badge count={item.messageCount}>
                    <Avatar src={item.avatar + `?${item.id}`} />
                  </Badge>
                }
                title={item.name}
                description={item.latestNews}
              />
              <span className="text-muted">{item.time}</span>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default SidebarMessage;
