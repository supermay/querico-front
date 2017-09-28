import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { fetchCakes } from '../actions/fetch';

class CakeItem extends PureComponent {
  componentWillMount() {
    this.props.fetchCakes()
  }

  renderCake = () => {
    const cakeId = parseInt(this.props.params.cakeId,10);
    const cake = this.props.cakes.find(cake => cake.id === cakeId);
    const flavors = cake.flavors || []
    return(
      <div key={cakeId}>
        <h2>{cake.name}</h2>
        <p>Flavors:</p>
        <ul>
          {flavors.map((flavor => <li>{flavor.name}</li>))}
        </ul>
      </div>
    )
  }

  render(){
    if(this.props.cakes.length === 0) return null
    return (
      <cake>
        {this.renderCake()}
      </cake>
    )
  }
}

const mapStateToProps = ({ cakes }) => ({
  cakes
})

export default connect(mapStateToProps, { fetchCakes })(CakeItem)
