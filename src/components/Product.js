import "../styles.css";

export default function Product(goggle) {
  return (
    <div className="Goggle">
      <h3>{goggle.name}</h3>
      <p>
        {goggle.size} - ${goggle.price}
      </p>
      <button>BUY</button>
    </div>
  );
}
