import React from "react";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";
import { Box } from "@nami/core";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <>
      <Box className="flex h-screen w-screen">
        <Box className="relative flex min-h-screen w-0 flex-1 flex-col">
          <AppHeader />
          <AppMain />
          <AppFooter />
        </Box>
      </Box>

      <ToastContainer
        position="top-right"
        closeButton={false}
        pauseOnFocusLoss={false}
        hideProgressBar
      />
    </>
  );
}

export default Layout;
