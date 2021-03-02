import React, { FC, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { SubRoute } from '../router/subRoute';
import { RouteConfigProps } from '../router/routerConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import './styles.scss';

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
      name: '人员管理',
      key: '/person',
      children: [
        {
          id: '3',
          name: '信息管理',
          key: '/person',
        },
      ],
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/login">退出登陆</a>
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
        <Header
          className="site-layout-background"
          style={{ padding: '0 16px', textAlign: 'right' }}
        >
          <div className="user-info">
            <span className="user-info--text" style={{ marginRight: '8px' }}>
              chenmmx
            </span>
            <Dropdown overlay={menu}>
              <Avatar
                size="large"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1kzITo565azzuazVupYhxNxPhB7jzO2MAQ&usqp=CAU"
                style={{ cursor: 'pointer' }}
              />
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: 'center', minHeight: 'calc(100vh - 156px)' }}
          >
            <Switch>
              {props.routes.map((item: RouteConfigProps) => {
                return <SubRoute {...item} key={item.id} path={item.path} />;
              })}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by chenmmx</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
