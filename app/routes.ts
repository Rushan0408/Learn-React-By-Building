import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/accordian" , "routes/accordian/Accordian.tsx" )

] satisfies RouteConfig;
