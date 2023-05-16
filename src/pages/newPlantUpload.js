import React from "react";

import PlantUploadForm from "../components/planters/uploadPlantComponent";


const NewPlantUpload = (props) => {
    const  saveNewPlantDataHandler = (enteredExpenseData) => {
        debugger
        const plantDetails = {
         ...enteredExpenseData,
         id: Math.random().toString(),   
        };
        props.onNewPlantUpload(plantDetails);
    }
    return (
        <div>
            <PlantUploadForm
            onSaveNewPlant={saveNewPlantDataHandler}
            >

            </PlantUploadForm>
        </div>
    );
}

export default NewPlantUpload;