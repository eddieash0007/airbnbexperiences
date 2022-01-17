import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import styles from "./styles.css";
import katie from "./images/katie.png";
import data from "./data.js";

export default function App() {
  
  const cards = data.map((card) => {
   
    return (
      <Card
        key={card.id}
        price={card.price}
        img={card.coverImg}
        reviewCount={card.stats.reviewCount}
        title={card.title}
        location={card.location}
        rating={card.stats.rating}
        openSpots={card.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}


