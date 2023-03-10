import React from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import routes, { RoutesType } from "@nami/routes";

const AppMain = () => {
  return (
    <div className="w-full flex-1 p-5 sm:p-8">
      <Routes>
        {routes.map(({ component, path, children }: RoutesType) => (
          <Route key={path} path={path} element={<Outlet />}>
            <Route
              index
              element={
                <React.Suspense fallback={<></>}>{component}</React.Suspense>
              }
            />
            {children?.map((item) => (
              <Route
                key={item.path}
                path={`${path}/${item.path}`}
                element={
                  <React.Suspense fallback={<></>}>
                    {item.component}
                  </React.Suspense>
                }
              />
            ))}
          </Route>
        ))}
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </div>
  );
};

export default AppMain;
