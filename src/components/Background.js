import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import fetchBackgrounds from '../actions/fetch';

class Background extends PureComponent {
  renderBackground = (background,index) => {
    return (
      <img key={index} src={background.image} alt={background.created_at}/>
    )
  }

  componentWillMount() {
    this.props.fetchBackgrounds()
  }



  render(){
    // const images = this.props.backgrounds.map((background) => background.image)
    //
    // const divStyle = {
    //   backgroundImage: "url("+ `${images[0]}` +")",
    //   backgroundSize: 'cover',
    // }
    return (
      <div className="background">
        {this.props.backgrounds.map(this.renderBackground)}
      </div>
    )
  }
}

const mapStateToProps = ({ backgrounds }) => ({
  backgrounds
})

export default connect(mapStateToProps, { fetchBackgrounds })(Background)
