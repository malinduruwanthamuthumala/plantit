import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HomePageSellItemsCardCOmponent = (props) => {
    const plant = props;
    return (
        <Card >
            <Card.Img variant="top" src={plant.plants.img} className="homepageimg" />
            <Card.Body>
                <Card.Title>{plant.plants.title}</Card.Title>
                <Card.Text>
                    {plant.plants.description}
                </Card.Text>
                <Card.Text>
                    price {plant.plants.getPrice("medium")}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )

}

export default HomePageSellItemsCardCOmponent;