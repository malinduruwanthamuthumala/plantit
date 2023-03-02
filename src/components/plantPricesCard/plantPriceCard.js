import React from "react";



class PlantPrices extends React.Component{

render(){
    const  plant  = this.props
 return(
    <div>
    <h6 className="landing_page_priceTags">Extra Large : <span className="landing_page_price"> Rs.{plant.plantpricedetails.getPrice("extraLarge")} </span> </h6>
    <h6 className="landing_page_priceTags">Large :  <span className="landing_page_price"> Rs.{plant.plantpricedetails.getPrice("large")}</span></h6>
    <h6 className="landing_page_priceTags">Medium : <span className="landing_page_price"> Rs.{plant.plantpricedetails.getPrice("medium")}</span></h6>
    </div>
 )
}

}

export default PlantPrices;