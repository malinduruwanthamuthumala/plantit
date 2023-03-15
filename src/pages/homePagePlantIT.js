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
                img: "https://img.freepik.com/free-photo/faux-watermelon-peperomia-plant-gray-pot_53876-110373.jpg?w=740&t=st=1677663748~exp=1677664348~hmac=e7d99c1f3bb813fcdadc2274738fd6bf2a1f144b4ec6f0f39b6b043501548520",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },
            {
                id: '2',
                title: "white rose",
                img: "https://img.freepik.com/free-photo/colour-flowers-white-pot-isolated-white_231208-2933.jpg?w=740&t=st=1677663494~exp=1677664094~hmac=1603c3634b362e04a3e08f8d5fdb20b0840143f8944d29d827c94edce708739b",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },
            {
                id: '3',
                title: "purple rose",
                img: "https://img.freepik.com/free-photo/birds-nest-plant-beige-pot_53876-134284.jpg?w=740&t=st=1677663609~exp=1677664209~hmac=d2e83c64b9ff02aa5d006994df6d7ec0792feb4c0cb236dcc0ad57c0dcd42599",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },
            {
                id: '4',
                title: "purple rose",
                img: "https://img.freepik.com/premium-photo/vases-with-plants-succulents-white-background-3d-illustration_101266-9005.jpg?w=740",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },{
                id: '1',
                title: "red rose",
                img: "https://img.freepik.com/free-photo/faux-watermelon-peperomia-plant-gray-pot_53876-110373.jpg?w=740&t=st=1677663748~exp=1677664348~hmac=e7d99c1f3bb813fcdadc2274738fd6bf2a1f144b4ec6f0f39b6b043501548520",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            }, {
                id: '4',
                title: "purple rose",
                img: "https://img.freepik.com/premium-photo/vases-with-plants-succulents-white-background-3d-illustration_101266-9005.jpg?w=740",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },
            {
                id: '3',
                title: "purple rose",
                img: "https://img.freepik.com/free-photo/birds-nest-plant-beige-pot_53876-134284.jpg?w=740&t=st=1677663609~exp=1677664209~hmac=d2e83c64b9ff02aa5d006994df6d7ec0792feb4c0cb236dcc0ad57c0dcd42599",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },]
        }
    }

    render() {
        const plants = this.state.plantCards;
        return (
            <div className="container row roomfac" id="homePageContainer">
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