import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { fetchCakes } from '../actions/fetch';

class CakeContainer extends PureComponent {
  renderCakes = (cake,index) => {
    return (
      <p key={index}>{cake.name}</p>
    )
  }

  componentWillMount() {
    this.props.fetchCakes()
  }

  render(){
    return(
      <div className="cake-container">
        {this.props.cakes.map(this.renderCakes)}
      </div>
    )
  }
}


const mapStateToProps = ({ cakes }) => ({
  cakes
})

export default connect(mapStateToProps, { fetchCakes })(CakeContainer)
