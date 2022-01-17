import katie from "../images/katie.png"
import star from "../images/Star.png"
export default function Card(props){
     let badgeText
     if (props.openSpots === 0)
     {
         badgeText = "SOLD OUT"
     }else if(props.location === "Online")
     {
         badgeText = "ONLINE"
     }
    return(
        <div className="card">
           {badgeText &&<div className="card--badge">{badgeText}</div>}
            <img src={props.img} alt="katie" className=""/>
            {/* <img src={`../images/${props.image}`} alt="katie" className=""/> */}
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / Person</p>
        </div>
    )
}