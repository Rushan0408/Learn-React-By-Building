import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/accordian" , "routes/accordian/Accordian.tsx" ),
    route("/colorgenerator","routes/colorgenerator/ColorGenerator.tsx"),
    route("/starrating","routes/star_rating/StarRating.tsx"),
] satisfies RouteConfig;
