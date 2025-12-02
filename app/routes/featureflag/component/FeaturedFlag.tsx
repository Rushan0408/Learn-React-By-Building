import { useContext } from "react"
import { FeaturedFlagContext } from "../context/FeaturedFlagContext";import Accordian from "~/routes/accordian/Accordian";
import ImageSlider from "~/routes/imageslider/ImageSlider";
import ScrollIndicator from "~/routes/scrollindicator/ScrollIndicator";
import TicTacToe from "~/routes/tictactoe/TicTacToe";
import StarRating from "~/routes/star_rating/StarRating";

const FeaturedFlag = () => {
  const {loading,flags} = useContext(FeaturedFlagContext);

  const componentsToRender = [
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showstarrating",
      component: <StarRating />,
    },
    {
      key: "showscrollindicator",
      component: <ScrollIndicator />,
    },
    {
      key: "showtictactoe",
      component: <TicTacToe />,
    }
  ];

  return (
    componentsToRender.map((item,key)=>(
      flags[item.key] ? item.component : null
    ))
  )
}

export default FeaturedFlag