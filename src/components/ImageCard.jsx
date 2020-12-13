import React, {Component} from 'react';

class ImageCard extends Component{
  constructor(props){
    super(props);

    this.imageRef = React.createRef();
    this.state = {
      spans: 0
    };
  }

  componentDidMount() {
    // after image downloads get image height and set how
    // many rows it will take in css grid
    this.imageRef.current.addEventListener('load', () =>{
      const imageHeight = this.imageRef.current.clientHeight;
      const rowHeight = 10;
      const spans = Math.ceil(imageHeight / rowHeight) + 1;
      this.setState({spans});
    });
  }

  render(){
    const {description, urls} = this.props.image;
    return(
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          src={urls.regular}
          alt={description}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCard;