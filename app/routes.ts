import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/accordian" , "routes/accordian/Accordian.tsx" ),
    route("/colorgenerator","routes/colorgenerator/ColorGenerator.tsx"),
    route("/starrating","routes/star_rating/StarRating.tsx"),
    route("/imageslider","routes/imageslider/ImageSlider.tsx"),
    route("/loadmoredata","routes/loadmoredata/LoadMoreData")
] satisfies RouteConfig;
