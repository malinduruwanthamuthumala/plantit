import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./uploadPlantComponent.css";

const PlantUploadForm = () => {

  const [enteredTitle,setEnteredTitle] = useState("");
  const [enteredprice,setEnteredPrice] = useState("");
  const [enteredDescription,setEnteredDescription] = useState("");

  const [plant, setPlantDetails] = useState({
    title: "",
    img: "https://img.freepik.com/free-photo/faux-watermelon-peperomia-plant-gray-pot_53876-110373.jpg?w=740&t=st=1677663748~exp=1677664348~hmac=e7d99c1f3bb813fcdadc2274738fd6bf2a1f144b4ec6f0f39b6b043501548520",
    description:
      "Land plants are multicellular organisms that can be distinguished from other living things by a number of characteristics: They make their own food. Plants are photosynthetic and contain a green pigment called chlorophyll, which enables plants to convert energy from the sun into food. Plants store their food as starch.",
    prices: { medium: "1300.00", large: "1600.00", extraLarge: "2500.00" },
    getPrice: function (key) {
      return this.prices[key];
    },
    climetic_conditions:
      "jhj jsdhfkds sdhjfjkdsf ksdjhfkjsdf ksdjhfksdhjf kdjshfjkdshf kjhfksdjf",
    scientific_name: "",
  });

  const onTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onPriceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
     const plantDetails = {
      ...plant,
      title : enteredTitle,
      price:enteredprice,
    }

    console.log(plantDetails);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <Form className="left-aligned " onSubmit={submitHandler}>
            <Form.Group className="mb-3 form-block" controlId="formBasicEmail">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={onTitleChange}
              />
              <Form.Text className="text-muted" hidden>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 form-block" controlId="formBasicEmail">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={onPriceChangeHandler}
              />
              <Form.Text className="text-muted" hidden>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 form-block" controlId="formBasicEmail">
              <Form.Label>description</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
              <Form.Text className="text-muted" hidden>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 form-block" controlId="formBasicEmail">
              <Form.Label>image</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
              <Form.Text className="text-muted" hidden>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 form-block" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted" hidden>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
};

export default PlantUploadForm;
