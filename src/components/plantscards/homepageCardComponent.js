import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./homePageCardComponent.css";
import PlantPrices from "../plantPricesCard/plantPriceCard";

const HomePageSellItemsCardCOmponent = (props) => {
    const plant = props;
    return (
        <Card >
            <Card.Img variant="top" src={plant.plants.img} className="homepageimg" />
            <Card.Body>
                <div className="row">
                    <h5 className="landingPage_card_title" >{plant.plants.title}</h5>
                    <p className="landingPage_card_description">{plant.plants.description}</p>
                    <PlantPrices plantpricedetails={plant.plants}/>
                  
                </div>
                <div className="row landing_page_action_buttons" >
                    
                    <div className="col-md-6">
                    <Button variant="outline-success" className="landingPage_ActionButtons">Buy Now</Button>
                    </div>
                    <div className="col-md-6">
                    <Button variant="outline-primary" className="landingPage_ActionButtons">Add to cart</Button>
                    </div>
                </div>
               
            </Card.Body>
        </Card>
    )

}

export default HomePageSellItemsCardCOmponent;