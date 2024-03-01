import Card from "./components/molecule/Card";
import shopImage from "./assets/pirarucu.jpg";
import vendorImage from "./assets/barco.png";

function App() {
  return (
    <div className="App">
      <Card 
        imageUrl={shopImage}
        price={25.90}  
        description="Pirarucu pescado do Lago Igapó, não assegurado de vir com a presença de minerais densos, como chumbo, mercúrio etc.." 
        vendor={{imageUrl:`${vendorImage}`, name: "José Pinhais - Pescaria avançada", rating: 100}}
        itemName="Pirarucu"
        stock={5}
      />
    </div>
  );
}

export default App;
