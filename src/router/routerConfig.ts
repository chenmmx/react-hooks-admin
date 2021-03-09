import loadable from '@loadable/component';
import { RouteComponentProps } from 'react-router';

export interface RouteConfigProps {
  path: string;
  exact: boolean;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  id: number;
  name?: string;
  routes?: RouteConfigProps[];
}

const AppLayout = loadable(() => import('../layout'));
const Login = loadable(() => import('../pages/login'));
const Home = loadable(() => import('../pages/home'));

export const routeConfig: RouteConfigProps[] = [
  {
    path: '/login',
    exact: true,
    component: Login,
    id: 99,
    name: 'Login',
  },
  {
    path: '/',
    exact: false,
    component: AppLayout,
    id: 999,
    name: 'Layout',
    routes: [
      {
        path: '/home',
        exact: false,
        component: Home,
        id: 1,
        name: 'Home',
      },
    ],
  },
];
