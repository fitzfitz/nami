import React from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { GlobalLoader } from "./core";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Outlet />}>
          <Route path="*" element={<Layout />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
      <GlobalLoader />
    </>
  );
}

export default App;
