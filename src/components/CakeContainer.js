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
      <p>Cake Container</p>
    )
  }
}


const mapStateToProps = ({ cakes }) => ({
  cakes
})

export default connect(mapStateToProps, { fetchCakes })(CakeContainer)
