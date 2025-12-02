import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/accordian" , "routes/accordian/Accordian.tsx" ),
    route("/colorgenerator","routes/colorgenerator/ColorGenerator.tsx"),
    route("/starrating","routes/star_rating/StarRating.tsx"),
    route("/imageslider","routes/imageslider/ImageSlider.tsx"),
    route("/loadmoredata","routes/loadmoredata/LoadMoreData.tsx"),
    route("/treemenu","routes/treemenu/Parent.tsx"),
    route("/qrgenerator","routes/qrgenerator/Qrgenerator.tsx"),
    route("/scrollindicator","routes/scrollindicator/ScrollIndicator.tsx"),
    route("/localstorage","routes/localstorage/LocalStorage.tsx"),
    route("/tabs","routes/tabs/TabsPage.tsx"),
    route("/modalpopup","routes/modalpopup/ModalPopup.jsx"),
    route("/githubsearch","routes/githubsearch/GithubSearch.jsx"),
    route("/searchautocomplete","routes/searchautocomplete/SearchAutoComplete.tsx"),
    route("/tictactoe","routes/tictactoe/TicTacToe.tsx"),
    route("/featureflag","routes/featureflag/Home.tsx"),
    route("/outsideclick","routes/customhooks/useOutsideClickTest.tsx")
] satisfies RouteConfig;
