import React from "react";

import "../components/shared/common.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HomePageSellItemsCardCOmponent from "../components/plantscards/homepageCardComponent";

class HomePagePlantIt extends React.Component {

    constructor() {
        super();
        this.state = {
            plantCards: [{
                id: '1',
                title: "red rose",
                img: "https://img.freepik.com/free-photo/red-anthurium-houseplant-brass-plant-pot_53876-126201.jpg?w=360&t=st=1677652962~exp=1677653562~hmac=2be9c6edaaa97d8e7c2d64b054e5abda7d83cb656df1ba42c983488a0f077c73",
                description: "lorem dskfdsh dkshfsdf dksjflksdjf ldskjfklsdjf dlkfksdjf lskdflksdf",
                prices: { medium: 1300, large: 1600, extraLarge: 2500 },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },
            {
                id: '2',
                title: "white rose",
                img: "",
                description: "lorem dskfdsh dkshfsdf dksjflksdjf ldskjfklsdjf dlkfksdjf lskdflksdf",
                prices: { medium: 1300, large: 1600, extraLarge: 2500 },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },
            {
                id: '3',
                title: "purple rose",
                img: "img",
                description: "lorem dskfdsh dkshfsdf dksjflksdjf ldskjfklsdjf dlkfksdjf lskdflksdf",
                prices: { medium: 1300, large: 1600, extraLarge: 2500 },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },
            {
                id: '4',
                title: "purple rose",
                img: "img",
                description: "lorem dskfdsh dkshfsdf dksjflksdjf ldskjfklsdjf dlkfksdjf lskdflksdf",
                prices: { medium: 1300, large: 1600, extraLarge: 2500 },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            }]
        }
    }

    render() {
        const plants = this.state.plantCards;
        return (
            <div className="container row" id="homePageContainer">
                {
                    plants.map((plant) => {
                        return (
                            <div className="col-md-3" key={plants.id}>
                                <HomePageSellItemsCardCOmponent plants={plant} />
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}

export default HomePagePlantIt