import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./homePageCardComponent.css";
import PlantPrices from "../plantPricesCard/plantPriceCard";

const HomePageSellItemsCardCOmponent = (props) => {
    const plant = props;
    return (
        <div className="plantCard">
        <Card >
            <Card.Img variant="top" src={plant.plants.img} className="homepageimg" />
            <Card.Body>
                <div className="row">
                    <h5 className="landingPage_card_title" >{plant.plants.title}</h5>
                    <PlantPrices plantpricedetails={plant.plants}/>
                  
                </div>
                <div className="container">
                <div className="row landing_page_action_buttons" >
                   <div className="col-md-4"></div>
                   <div className="col-md-8">
                        <div className="row">
                        <div className="col-md-6">
                    <Button variant="outline-success" className="landingPage_ActionButtons btn-sm btn-block">Buy Now</Button>
                    </div>
                    <div className="col-md-6">
                    <Button variant="outline-primary" className="landingPage_ActionButtons btn-sm btn-block">Add to cart</Button>
                    </div>
                        </div>
                   </div>
                    
                </div>
                </div>
               
            </Card.Body>
        </Card>
        </div>
    )

}

export default HomePageSellItemsCardCOmponent;