import RestroCard, { withpromotedLabel } from "./RestoCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useBodyData from "../utils/useBodyData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext, useState, useEffect } from "react";
import Demo from "./Demo";
import Demo2 from "./Demo2";

const Body = () => {
  // const {
  //   listOfRestaurant,
  //   filterRestaurant,
  //   searchText,
  //   loading,
  //   setSearchText,
  //   handleSearch,
  //   handleFilterTopRated,
  // } = useBodyData();

  // console.log(listOfRestaurant);
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const RestaurantCardPromoted = withpromotedLabel(RestroCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const restaurants =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your interenet connection;
      </h1>
    );

  if (loading) {
    return <Shimmer />;
  }

  //Higher orer componnet
  const RestroCardpromoted = withpromotedLabel(RestroCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}

      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            placeholder="search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
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
        {filteredRestaurant.map((resto) => (
          <Link to={"/restaurants/" + resto.info.id} key={resto.info.id}>
            {resto.data ? (
              <RestroCardpromoted resData={resto} /> //Higher orer componnet
            ) : (
              <RestroCard resData={resto} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
