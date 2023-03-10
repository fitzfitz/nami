import React from "react";
import { Button } from "@nami/core";
import { useLayoutStore, useUserStore } from "@nami/store";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const { errorPage, clearLayoutStore } = useLayoutStore();
  const { clearAll } = useUserStore();
  const navigate = useNavigate();

  const clearStorage = () => {
    clearLayoutStore();
    clearAll();
    localStorage.clear();
  };
  const logout = () => {
    clearStorage();
    navigate("/login", { replace: true });
  };
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-white">
      <span>
        {errorPage === 401
          ? "You're token is expired, please relogin"
          : "Page Error, Contact Administrator"}
      </span>
      {errorPage === 401 ? <Button onClick={logout}>Login</Button> : null}
    </div>
  );
};

export default ErrorPage;
