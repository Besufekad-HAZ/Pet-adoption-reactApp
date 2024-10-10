import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <button
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              className={index === active ? "active" : ""}
              aria-label={`Thumbnail ${index + 1}`}
              style={{
                background: `url(${photo}) no-repeat center center`,
                backgroundSize: "cover",
                border: "none",
                padding: 0,
                width: "100px",
                height: "100px",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
