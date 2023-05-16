import React from "react";

import "../components/shared/common.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HomePageSellItemsCardCOmponent from "../components/plantscards/homepageCardComponent";
import Corousal from "../components/UI/corousal";
import PaginationLanding from "../components/UI/pagination";
import NewPlantUpload from "./newPlantUpload";

class HomePagePlantIt extends React.Component {

   
    

    constructor(props) {
       
        super(props);
        this.addNewPlantHandler.bind(this);
        this.state = {
            plantCardsPerPage : [],
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
                id: '5',
                title: "red rose",
                img: "https://img.freepik.com/free-photo/faux-watermelon-peperomia-plant-gray-pot_53876-110373.jpg?w=740&t=st=1677663748~exp=1677664348~hmac=e7d99c1f3bb813fcdadc2274738fd6bf2a1f144b4ec6f0f39b6b043501548520",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            }, {
                id: '6',
                title: "purple rose",
                img: "https://img.freepik.com/premium-photo/vases-with-plants-succulents-white-background-3d-illustration_101266-9005.jpg?w=740",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },
            {
                id: '7',
                title: "purple rose",
                img: "https://img.freepik.com/free-photo/birds-nest-plant-beige-pot_53876-134284.jpg?w=740&t=st=1677663609~exp=1677664209~hmac=d2e83c64b9ff02aa5d006994df6d7ec0792feb4c0cb236dcc0ad57c0dcd42599",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            },{
                id: '8',
                title: "red rose",
                img: "https://img.freepik.com/free-photo/faux-watermelon-peperomia-plant-gray-pot_53876-110373.jpg?w=740&t=st=1677663748~exp=1677664348~hmac=e7d99c1f3bb813fcdadc2274738fd6bf2a1f144b4ec6f0f39b6b043501548520",
                description: "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
                prices: { "medium": "1300.00", "large": "1600.00", "extraLarge": "2500.00" },
                getPrice: function (key) { return this.prices[key] },
                climetic_conditions: "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
                scientific_name: "jhsdfjvsdhjfvdsf",
            }],
            perPage:20,
            currentPage:0,

        }
         
    }

    componentDidMount(){
        debugger
        this.setPagePagination();
    }

    
    addNewPlantHandler (newPlantData)  {
        const newPlantDetails = {
          ...newPlantData,
        };
        debugger
        console.log(newPlantDetails);
         
        this.state.plantCards.push(newPlantDetails);
        const newPlantCards = this.state.plantCards;
        this.setState({plantCardsPerPage:newPlantCards});
      }
    
     

    setPagePagination = () =>{
        debugger
        const plantsList = this.state.plantCards;
        const perPage = this.state.perPage;
        const startIndex =  (this.state.currentPage * perPage);
        const noOfPlants = plantsList.length;
        const endIndex = startIndex + perPage < noOfPlants - 1 ? startIndex + perPage : noOfPlants - 1;
        const filteredPlantsList = plantsList.slice(startIndex,endIndex);

        this.setState({ plantCardsPerPage: filteredPlantsList });
    }

    clickHandler = () => {
        debugger
        const currentPage = ++this.state.currentPage 
        this.setState({ currentPage: currentPage });  
        this.setPagePagination();
    }

    render() {
        const plants = this.state.plantCardsPerPage ;
        return (
            <div>
                <div className="container-fluid">
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
                </div>
                <div className="padding20 center">
                <button  onClick={this.clickHandler}> next</button>
                    <PaginationLanding></PaginationLanding>
                    
                </div>
                <div className="heightto400 ">
                <NewPlantUpload onNewPlantUpload={this.addNewPlantHandler.bind(this)} />
                </div>
            </div>
            
            
        );
    }
}

export default HomePagePlantIt