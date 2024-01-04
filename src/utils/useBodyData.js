import { useState, useEffect } from "react";
const useBodyData = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.913706&lng=77.60303&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filteredRestaurants);
  };

  const handleFilterTopRated = () => {
    const topRatedRestaurants = listOfRestaurant.filter(
      (restaurant) => restaurant.info.avgRating > 4.1
    );
    setFilterRestaurant(topRatedRestaurants);
  };
  return {
    listOfRestaurant,
    filterRestaurant,
    searchText,
    loading,
    setSearchText,
    handleSearch,
    handleFilterTopRated,
  };
};
export default useBodyData;
