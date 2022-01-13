import katie from "../images/katie.png"
import star from "../images/Star.png"
export default function Card(){
    return(
        <div className="card">
            <img src={katie} alt="katie" className=""/>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span className="gray">5.0</span>
                <span className="gray">(6) •</span>
                <span>USA</span>
            </div>
            <p>Life Lessons With Katie Zaferes</p>
            <p><span className="bold">From $136</span> / Person</p>
        </div>
    )
}