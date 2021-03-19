import React, { FC, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { SubRoute } from '../router/subRoute';
import { RouteConfigProps } from '../router/routerConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu, Dropdown, Avatar, Tooltip } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import Notification from './components/notification';
import './styles.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AppLayout: FC = (props: any) => {
  interface MenuObject {
    id: string;
    name: string;
    key: string;
    children?: any[];
  }
  const history = useHistory();
  const location = useLocation();
  const [selectKey, setSelectKey] = useState<string>('');
  useEffect(() => {
    setSelectKey(location.pathname);
  }, [location.pathname]);
  const menuList: MenuObject[] = [
    {
      id: '1',
      name: '首页',
      key: '/home',
    },
    {
      id: '2',
      name: 'SlekChat',
      key: '/chat',
    },
    {
      id: '4',
      name: '个人页',
      key: '/personal',
      children: [
        {
          id: '5',
          name: '个人中心',
          key: '/personal/center',
        },
        {
          id: '6',
          name: '个人设置',
          key: '/personal/settings',
        },
      ],
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">
          <UserOutlined />
          个人中心
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.antgroup.com">
          <SettingOutlined />
          个人设置
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <a href="/login">
          <LogoutOutlined />
          退出登陆
        </a>
      </Menu.Item>
    </Menu>
  );
  const onMenuSelect = (item: any): any => {
    history.push(item.key);
  };
  return (
    <Layout className="app-layout">
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[selectKey]} onSelect={onMenuSelect}>
          {menuList.map((item) => {
            if (item.children && item.children.length > 0) {
              return (
                <SubMenu key={item.key} title={item.name}>
                  {item.children.map((item1) => {
                    return <Menu.Item key={item1.key}>{item1.name}</Menu.Item>;
                  })}
                </SubMenu>
              );
            } else {
              return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
            }
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background site-layout-header">
          <div style={{ flex: '1 1 0%' }} />
          <div className="site-layout-header-right">
            <Tooltip placement="bottom" title="使用文档">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="site-layout-header-right-action use-instruction"
                style={{ color: 'inherit' }}
              >
                <QuestionCircleOutlined />
              </a>
            </Tooltip>
            <Notification />
            <Dropdown overlay={menu}>
              <span className="site-layout-header-right-action user-info">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1kzITo565azzuazVupYhxNxPhB7jzO2MAQ&usqp=CAU"
                  style={{ cursor: 'pointer', marginRight: '8px' }}
                />
                <span className="user-info--text">chenmmx</span>
              </span>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 'calc(100vh - 142px)' }}
          >
            <Switch>
              {props.routes.map((item: RouteConfigProps) => {
                return <SubRoute {...item} key={item.id} path={item.path} />;
              })}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>DoDo ©2021 Created by chenmmx</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
