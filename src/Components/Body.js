import RestroCard, { withpromotedLabel } from "./RestoCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useBodyData from "../utils/useBodyData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import Demo from "./Demo";
import Demo2 from "./Demo2";

const Body = () => {
  const {
    listOfRestaurant,
    filterRestaurant,
    searchText,
    loading,
    setSearchText,
    handleSearch,
    handleFilterTopRated,
  } = useBodyData();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your interenet connection;
      </h1>
    );

  //Higher orer componnet
  const RestroCardpromoted = withpromotedLabel(RestroCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}

      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={handleFilterTopRated}
          >
            Top Rated Restro
          </button>
        </div>
        <div className="m-4 p-4">
          <label>UserName:</label>
          <input
            className="search m-4 border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurant.map((resto) => (
          <Link to={"/restaurants/" + resto.info.id} key={resto.info.id}>
            {resto.data ? (
              <RestroCardpromoted resData={resto} /> //Higher orer componnet
            ) : (
              <RestroCard resData={resto} />
            )}
          </Link>
        ))}
        ß
      </div>
    </div>
  );
};
export default Body;
