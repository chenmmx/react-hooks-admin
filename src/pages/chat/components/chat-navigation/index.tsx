/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, ReactElement, useContext } from 'react';
import { Context } from '../../index';
import { CHANGE_SELECT_NAV_KEY } from '../../context';
import {
  MessageOutlined,
  UserOutlined,
  StarOutlined,
  InboxOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import { Badge, Menu, Tooltip, Dropdown } from 'antd';
import './styles.less';
interface MenuObject {
  id: number;
  key: string;
  icon: ReactElement;
  name: string;
  messageCount: number;
}

interface UserMenuObj {
  key: string;
  name: string;
}

const menuList: MenuObject[] = [
  {
    id: 1,
    key: 'message',
    icon: <MessageOutlined style={{ fontSize: '1.2rem' }} />,
    name: '消息',
    messageCount: 1,
  },
  {
    id: 2,
    key: 'friends',
    icon: <UserOutlined style={{ fontSize: '1.2rem' }} />,
    name: '朋友',
    messageCount: 0,
  },
  {
    id: 3,
    key: 'favorites',
    icon: <StarOutlined style={{ fontSize: '1.2rem' }} />,
    name: '收藏',
    messageCount: 0,
  },
  {
    id: 4,
    key: 'archived',
    icon: <InboxOutlined style={{ fontSize: '1.2rem' }} />,
    name: '存档',
    messageCount: 0,
  },
  {
    id: 5,
    key: 'switchMode',
    icon: <SkinOutlined style={{ fontSize: '1.2rem' }} />,
    name: '主题切换',
    messageCount: 0,
  },
];

const userMenuList: UserMenuObj[] = [
  {
    key: 'editProfile',
    name: '编辑资料',
  },
  {
    key: 'profile',
    name: '个人信息',
  },
  {
    key: 'settings',
    name: '设置',
  },
];

const userMenu: ReactElement = (
  <Menu>
    {userMenuList.map((menu) => {
      return (
        <Menu.Item key={menu.key}>
          <a target="_blank" rel="noopener noreferrer" href="#">
            {menu.name}
          </a>
        </Menu.Item>
      );
    })}
    <Menu.Divider />
    <Menu.Item danger={true}>
      <span>退出登陆</span>
    </Menu.Item>
  </Menu>
);

const Chat: FC = () => {
  const { state, dispatch } = useContext(Context);

  const onNavClick = (key: string) => {
    if (dispatch) {
      dispatch({ type: CHANGE_SELECT_NAV_KEY, id: key });
    }
  };

  return (
    <div className="chat-layout-navigation">
      <div className="nav-group">
        <ul className="nav-group-list">
          <li className="nav-group-list-item logo">
            <a href="#">
              <img
                src="http://touxiangkong.com/uploads/allimg/20203301301/2020/3/YNVjqi.jpg"
                alt=""
              />
            </a>
          </li>
          {menuList.map((menu) => {
            return (
              <li
                className={menu.id === 4 ? 'nav-group-list-item brackets' : 'nav-group-list-item'}
                key={menu.id}
              >
                <Tooltip placement="right" title={menu.name}>
                  <a
                    href="#"
                    className={state.selectNavKey === menu.key ? 'active' : ''}
                    onClick={() => onNavClick(menu.key)}
                  >
                    <Badge dot={true} count={menu.messageCount}>
                      {menu.icon}
                    </Badge>
                  </a>
                </Tooltip>
              </li>
            );
          })}
          <li className="nav-group-list-item logo">
            <a href="#">
              <Dropdown overlay={userMenu} trigger={['click']} placement="topLeft">
                <img src="https://api.sunweihu.com/api/sjtx/api.php" alt="" />
              </Dropdown>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chat;
