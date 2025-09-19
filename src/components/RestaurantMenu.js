import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_url } from "../utils/constants";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const [Menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_url+ resid);
    const json = await data.json();
    console.log(json);
    setMenu(json.data);
  };
  if (Menu === null) return <Shimmer />;

  const restaurantInfo = Menu?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;

  const restaurantAddi = restaurantInfo?.sla;

  const resMenu = Menu?.cards
    ?.find((card) => card.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (c) => c?.card?.card?.itemCards
    )?.card?.card?.itemCards;

  return (
    <div className="Menu">
      <div className="Menu_upper">
        <div className="menu_head">
          <h1>{restaurantInfo.name}</h1>
        </div>
        <div className="menu_shadow">
          <div className="menu_info">
            <h1>
              {restaurantInfo.avgRating} {restaurantInfo.costForTwoMessage}
            </h1>
            <a>
              <h1>{restaurantInfo.cuisines.join(" , ")}</h1>
            </a>
            <h1>{restaurantAddi.deliveryTime}.min</h1>
          </div>
        </div>
      </div>
      <div className="menu_main">
        <ul>
          {resMenu.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
