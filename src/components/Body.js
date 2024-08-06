import RestarauntCard from "./RestarauntCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restarauntList,setRestarauntList] = useState(resObj);
    return (
        <div className="body">
            <div className="filter">
                <button className="res-btn" onClick= {() =>{
                    const filteredList = restarauntList.filter( (res) => res.info.avgRating > 4.3);
                    setRestarauntList(filteredList);
                }}>Top Rated Restaraunts</button>
            </div>
            <div className="res-container">
                {restarauntList.map((restaraunt, index) => <RestarauntCard key={restaraunt.info.id} resData={restaraunt} />)}
            </div>
        </div>
    )
}

export default Body;