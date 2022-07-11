import * as React from 'react';
import { Route } from 'react-router';
import { Admin, CustomRoutes, Resource } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import Dashboard from './component/Dashboard';
import photos from './component/photos';
import tags from './component/tags';
import authProvider from './component/authProvider';
import {Layout} from './component/layout';
import Configuration from './component/DarkMode';
import { LocalOffer, PhotoLibrary,} from '@mui/icons-material';


export const API = "http://192.168.2.15:7979"
// const dataProvider = jsonServerProvider("http://localhost:3001");
const dataProvider = jsonServerProvider(`${API}/api`);
const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <CustomRoutes>
        <Route path="/configuration" element={<Configuration />} />
      </CustomRoutes>
      <Resource name="files" {...photos} icon={PhotoLibrary} />
      <Resource name="tags" {...tags} icon={LocalOffer} />
    </Admin>
  );
};

export default App;
