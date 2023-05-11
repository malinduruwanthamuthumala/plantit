import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  "./uploadPlantComponent.css";

const PlantUploadForm = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                <Form className="left-aligned ">
                     <Form.Group className="mb-3 form-block" controlId="formBasicEmail">
                        <Form.Label>title</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                        <Form.Text className="text-muted" hidden>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 form-block" controlId="formBasicEmail">
                        <Form.Label>price</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
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
}

export default PlantUploadForm;