import RestarauntCard, { promotedRestaurant } from "./RestarauntCard";
// import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [restarauntList, setRestarauntList] = useState([]);
    const [restarauntFilteredList, SetRestarauntFilteredList] = useState([]);
    const [seachValue, SetSearchValue] = useState('');
    const RestaurantWithPromotedLabel = promotedRestaurant(RestarauntCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8496217&lng=81.0072193&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setRestarauntList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            SetRestarauntFilteredList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log("use effect rendered");
        } catch (error) {
            console.log(error);
        }
    }
    console.log(restarauntFilteredList);

    return restarauntList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="filter-search">
                    <input type="text" className="search-box" value={seachValue} onChange={(e) => {
                        SetSearchValue(e.target.value);
                    }}></input>
                    <button onClick={() => {
                        const filteredRestarauntList = restarauntList.filter((res) => 
                            res.info.name.toLowerCase().includes(seachValue.toLowerCase()))
                        SetRestarauntFilteredList(filteredRestarauntList);
                    }}>Search</button>
                </div>
                <button className="res-btn" onClick={() => {
                    const filteredList = restarauntList.filter((res) => res.info.avgRating > 4.3);
                    setRestarauntList(filteredList);
                }}>Top Rated Restaraunts</button>
            </div>
            <div className="res-container">
                {restarauntFilteredList.map((restaraunt, index) => 
                <Link to={'restaurant/' + restaraunt.info.id} key={restaraunt.info.id}>{restaraunt.info.isOpen ?
                 (<RestaurantWithPromotedLabel resData={restaraunt}/>) :
                  (<RestarauntCard resData={restaraunt} />)}</Link>)}
            </div>
        </div>
    )
}

export default Body;