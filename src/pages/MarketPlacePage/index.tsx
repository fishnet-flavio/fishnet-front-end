import Card from "../../components/molecule/Card"
import shopImage from "../../assets/pirarucu.jpg"
import vendorImage from "../../assets/barco.png";
import Base from "../../components/atom/Base";

const MarketPlacePage = () => {
    return (
    <Base $background="transparent" $flexDirection="row" $justifyContent="space-around" $flexWrap="wrap" $gap={2}>
        <Card
            imageUrl={shopImage}
            price={25.90}  
            description="Pirarucu pescado do Lago Igapó, não assegurado de vir com a presença de minerais densos, como chumbo, mercúrio etc.." 
            vendor={{imageUrl:`${vendorImage}`, name: "José Pinhais", rating: 100}}
            itemName="Pirarucu"
            stock={5}
        />
        <Card
            imageUrl={shopImage}
            price={25.90}  
            description="Pirarucu pescado do Lago Igapó, não assegurado de vir com a presença de minerais densos, como chumbo, mercúrio etc.." 
            vendor={{imageUrl:`${vendorImage}`, name: "José Pinhais", rating: 100}}
            itemName="Pirarucu"
            stock={5}
        />
        <Card
            imageUrl={shopImage}
            price={25.90}  
            description="Pirarucu pescado do Lago Igapó, não assegurado de vir com a presença de minerais densos, como chumbo, mercúrio etc.." 
            vendor={{imageUrl:`${vendorImage}`, name: "José Pinhais", rating: 100}}
            itemName="Pirarucu"
            stock={5}
        />
    </Base>
        
    )
}

export default MarketPlacePage