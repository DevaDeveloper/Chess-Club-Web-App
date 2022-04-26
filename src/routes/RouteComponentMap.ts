import { FC } from 'react';
import {
  HOME_PATH,
  O_NAMA_PATH,
  CONTACT_PATH,
  ADMIN_PANEL,
  ADMIN_PANEL_SCREEN,
} from './path-constants';

import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ONamaPage from '../pages/Onama/ONamaPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import OnePostScreen from '../features/sk-posts/OnePostScreen';
import AdminScreen from '../pages/AdminPage/AdminPage';
import AdminPanelScreen from '../pages/AdminPage/AdminPanelPage';

interface IPathComponent {
  path?: string;
  component: FC;
}

const pathComponentArray: IPathComponent[] = [];

pathComponentArray.push({ path: HOME_PATH, component: HomePage });
pathComponentArray.push({ path: O_NAMA_PATH, component: ONamaPage });
pathComponentArray.push({ path: CONTACT_PATH, component: ContactPage });
pathComponentArray.push({ path: ADMIN_PANEL, component: AdminScreen });
pathComponentArray.push({
  path: ADMIN_PANEL_SCREEN,
  component: AdminPanelScreen,
});
pathComponentArray.push({ path: '/objava/:id', component: OnePostScreen });
pathComponentArray.push({ component: NotFoundPage });

export { pathComponentArray };
export default {};
