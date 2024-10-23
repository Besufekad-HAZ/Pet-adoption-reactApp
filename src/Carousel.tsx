import { Component } from "react";

interface IProps {
  images: string[];
}

class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    this.setState({
      active: event.target.dataset.index ? +event.target.dataset.index : 0,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel mt-2 flex h-96 flex-col items-center justify-around lg:flex-row">
        <img
          src={images[active]}
          data-testid="hero"
          alt="animal"
          className="lg:max-w-1/2 max-h-full max-w-full"
        />
        <div className="flex w-full lg:flex lg:w-2/4">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              data-testid={`thumbnail${index}`}
              key={photo}
              src={photo}
              className={`m-4 inline-block h-24 w-24 cursor-pointer rounded-full border-2 ${
                index === active
                  ? "border-gray-800 opacity-60"
                  : "border-gray-300"
              }`}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
