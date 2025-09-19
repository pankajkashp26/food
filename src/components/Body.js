import { useEffect, useState } from "react";
import reslist from "../utils/mocData";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [ListOfRestraunts, setListOfRestraunts] = useState([]);

  const listfilter = () => {
    const filteredList = reslist.filter((res) => res.info.avgRating > 4.5);
    setListOfRestraunts(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66770&lng=77.43370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [SearchText, setSearchText] = useState("");

  return ListOfRestraunts.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="before_body_line">
        </div>
        <div className="search">
          <input type="text" className="SearchBox" value={SearchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />
          <button onClick={()=>{
            const filteredSearch=ListOfRestraunts.filter((res)=>
            res.info.name.includes(SearchText)
            );
            setListOfRestraunts(filteredSearch);
          }}>Search</button>
        </div>
        <div className="Top_rated_btn">
          <button className="filtr_btn" onClick={listfilter}>
            Top Rated Restraunt
          </button>
        </div>
    
      
      <div className="res-con-main">
        <div className="res-con">
          {ListOfRestraunts.map((restraunt) => (
            <Link key={restraunt.info.id}  to={"/restaurant/"+restraunt.info.id}><Card resData={restraunt} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
 
