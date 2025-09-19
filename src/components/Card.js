import { CDN_URL } from "../utils/constants";

const Card=(props)=>{ 
    const {resData}=props;
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId
        }=resData?.info;
    const {
        deliveryTime
    }=resData?.info.sla
    return (
        <div className="card">
            <img src={CDN_URL+ cloudinaryImageId}/>
            <h3>{name} </h3>
            <h4>{avgRating}  . {deliveryTime} Mins </h4>
            <h5>{cuisines.join(", ")} </h5>
            <h5>{costForTwo} </h5>
        </div>
    )
};


export default Card;