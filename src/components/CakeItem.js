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
    const flavors = cake.flavors
    const choose_flavor = cake.flavors.length !== 0

    return(
      <form key={cakeId}>
        <p id='cake-name'>{cake.name}</p>
        {console.log(choose_flavor)}
        { choose_flavor &&
          <p>{'Flavors:  '}
            <select>{flavors.map(flavor => <option value={flavor.name}>{flavor.name}</option>)}</select>
          </p>
          }
          <button>select this cake</button>
      </form>
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
