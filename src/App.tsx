import Card from "./components/molecule/Card";


function App() {
  return (
    <div className="App">
      <Card 
        imageUrl="~//assets/pirarucu.jpg" 
        price={25.90}  
        description="Pirarucu pescado do Lago Igapó" 
        vendor={{name: "José Pinhais"}}
        itemName="Pirarucu"
        stock={5}
      />
    </div>
  );
}

export default App;
