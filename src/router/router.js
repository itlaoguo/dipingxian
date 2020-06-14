import Loadable from '@loadable/component';
import Home from '../pages/Home/home';
const router = [
  {
    path: '/',
    exact: true,
    component: Home,
    // strict: true,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
];
export default router;
