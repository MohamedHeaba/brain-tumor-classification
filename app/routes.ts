import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/main-layout.tsx", [route("/", "routes/home/index.tsx")]),
  route("/auth", "routes/auth/index.tsx"),
] satisfies RouteConfig;
