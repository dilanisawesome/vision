import "./styles.css";
import Product from "./components/Product";
import data from "./data";

export default function App() {
  const goggles = data.map((goggle) => {
    return <Product key={goggle.id} {...goggle} />;
  });

  return (
    <div className="App">
      <h1>Vision</h1>
      {goggles}
    </div>
  );
}
