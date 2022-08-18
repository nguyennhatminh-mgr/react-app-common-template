import { Routes, Route } from 'react-router-dom';

import { HomePage, LoginPage, NotFoundPage } from 'pages';
import { PrivateRoute, PublicRoute, RouterConstants } from 'routes';

const MainRoute = () => (
  <Routes>
    <Route element={<PrivateRoute />}>
      {/* Add private routes here */}
      <Route path={RouterConstants.home} element={<HomePage />} />
    </Route>
    <Route element={<PublicRoute />}>
      {/* Add public routes here */}
      <Route path={RouterConstants.login} element={<LoginPage />} />
    </Route>
    <Route path="/*" element={<NotFoundPage />} />
  </Routes>
);

export default MainRoute;
