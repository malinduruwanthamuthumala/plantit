import Carousel from 'react-bootstrap/Carousel';

function Corousal (props) {
    return (
        <Carousel slide={false}>
          <Carousel.Item  className="heightto400">
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/80453/poppy-field-of-poppies-flower-flowers-80453.jpeg?cs=srgb&dl=pexels-pixabay-80453.jpg&fm=jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="heightto400">
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/background/20230401/original/pngtree-indoor-plants-sofa-blue-background-picture-image_2251874.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="heightto400">
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-photo/minimal-living-room-with-interior-sofa-green-nature-tropical-plant-decoration-generative-ai_106651-7317.jpg?w=2000"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Corousal;