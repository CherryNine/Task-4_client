import SuspenseComponent from 'components/suspense';
import React, { FC, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';


const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  return sessionStorage.getItem('accessToken') ? (
    <Suspense fallback={<SuspenseComponent />}>
      <div>
        <Element />
      </div>
    </Suspense>
  ) : (
    <Navigate to={'/auth/sign-in'}/>
  );
};


const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<SuspenseComponent />}>
    <Element />
  </Suspense>
);


const UsersPage = React.lazy(() => import('app/users'));
const SignPage = React.lazy(() => import('app/auth/'));


const AppRoutes = () => {
  return (
    <Routes>
      {/* PRIVATE */}
      <Route path={'/users/*'} element={<PrivateRoute element={UsersPage} />} />

      {/* PUBLIC */}
     
      <Route
        path={'/auth/*'}
        element={<PublicRoute element={SignPage} />}
      />
    

    
    

      {/* DEFAULT */}

      <Route path="*" element={<Navigate to="/users" />} />
    </Routes>
  );
};

export default AppRoutes;
