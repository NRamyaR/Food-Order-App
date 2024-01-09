import { useContext } from "react";
import { CDN_LINK } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestroCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[200px] bg-gray-50 rounded-lg hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="rest-img"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4 className="text-amber-600">{costForTwo}</h4>
      <h4>{sla?.deliveryTime}minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher order component
//Input - RestroCard output => RestroCardpromoted
export const withpromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
