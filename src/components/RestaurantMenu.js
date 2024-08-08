import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }
    if(resInfo === null ) return <Shimmer />

    // const { name, costForTwo } = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;

    const {itemCards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    return (
        <div className="menu">
            <h1>Menu</h1>
            <ul>
                {itemCards.map( (item) => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
        </div>
    )
}
export default RestaurantMenu;