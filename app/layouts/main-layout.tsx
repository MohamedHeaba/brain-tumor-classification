import { Outlet, redirect, type LoaderFunctionArgs } from "react-router";
import Navbar from "./navbar";
import { checkIsAuthenticated } from "~/utils/auth.server";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tadawy - تداوى" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MainLayout() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export function loader({ request }: LoaderFunctionArgs) {
  const isAuthenticated = checkIsAuthenticated(request);
  if (!isAuthenticated) {
    return redirect("/auth");
  }
}
