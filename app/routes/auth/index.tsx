import React, { useState } from "react";
import Login from "./login";
import Register from "./register";
import { redirect, type LoaderFunctionArgs } from "react-router";
import { checkIsAuthenticated } from "~/utils/auth.server";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mx-auto">
      {isLogin ? (
        <Login onSwitch={() => setIsLogin(false)} />
      ) : (
        <Register onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export function loader({ request }: LoaderFunctionArgs) {
  const isAuthenticated = checkIsAuthenticated(request);
  if (isAuthenticated) {
    return redirect("/");
  }
}
