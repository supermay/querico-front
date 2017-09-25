import React, { PureComponent } from 'react';

class Background extends PureComponent {
  renderBackground = (background,index) => {
    return (
      <img key={index} src={background.image} alt={background.id}/>
    )
  }
  render(){
    return (
      <div className="background">
        {this.props.backgrounds.map(this.renderBackground)}
      </div>
    )
  }
}

export default Background;
