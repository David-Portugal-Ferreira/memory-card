import '../styles/card.css'

export default function Card({ card, suffle, checkImagesIds }) {
    function handleClick() {
        checkImagesIds(card.id);
        suffle();
    }
  return (
    <div className="card-img" onClick={handleClick}>
      <img src={card.images.fixed_height.url} alt={card.alt_text} />
    </div>
  );
}
