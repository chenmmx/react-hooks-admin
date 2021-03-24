import React, { FC, useContext } from 'react';
import { Context } from '../../index';
import { CHANGE_SELECT_COMMENT_ID, CHANGE_SELECT_NAV_KEY } from '../../context';
import { Button, Input, List, Avatar } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';

const data = [
  {
    id: '1',
    name: '张三',
    label: 'Web Designer',
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '2',
    name: '李四',
    label: 'Web Designer',
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '3',
    name: '王小二',
    label: 'Web Designer',
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '4',
    name: '葛二蛋',
    label: 'Web Designer',
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
  {
    id: '5',
    name: '葛二蛋',
    label: 'Web Designer',
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
  },
];

const SidebarFriends: FC = () => {
  const { dispatch } = useContext(Context);
  const onMessageClick = (id: string): void => {
    if (dispatch) {
      dispatch({ type: CHANGE_SELECT_COMMENT_ID, data: id });
      dispatch({ type: CHANGE_SELECT_NAV_KEY, data: 'message' });
    }
  };

  return (
    <div className="sidebar sidebar-friends">
      <header>
        <span>朋友</span>
        <div className="btn-group">
          <Button icon={<UsergroupAddOutlined />} />
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
              onClick={() => {
                onMessageClick(item.id);
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar + `?${item.id}`} />}
                title={item.name}
                description={item.label}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default SidebarFriends;
