import React from "react";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";
import { Box } from "@nami/core";
import { ToastContainer } from "react-toastify";
import cloud from "@nami/assets/images/svg/cloud.svg";

function Layout() {
  return (
    <>
      <Box className="relative flex h-screen w-screen overflow-auto">
        <Box className="absolute left-0 top-0 -z-30 h-full w-full overflow-hidden">
          <img
            src={cloud}
            height="46px"
            alt="nami-clouds"
            className="absolute top-[15%] left-[15%] animate-cloud-1"
          />
          <img
            src={cloud}
            height="46px"
            alt="nami-clouds"
            className="absolute top-[45%] left-[85%] animate-cloud-2"
          />
          <img
            src={cloud}
            height="46px"
            alt="nami-clouds"
            className="absolute top-[75%] left-[5%] animate-cloud-3"
          />
        </Box>
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
