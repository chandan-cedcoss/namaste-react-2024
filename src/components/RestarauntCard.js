import {RES_URL} from "../utils/constants";

const RestarauntCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={RES_URL+cloudinaryImageId}></img>
            <h4>{name}</h4>
            <h4>{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}

export default RestarauntCard;