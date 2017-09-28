import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { fetchCakes } from '../actions/fetch';

import { Link } from 'react-router';

class CakeContainer extends PureComponent {
  renderCakes = (cake,index) => {
    return (
      <div key={index}>
        <Link to={`/cakes/${cake.id}`}>
          <p>{cake.name}</p>
        </Link>
        {/* <p>{cake.flavors.map(flavor => flavor.name)}</p> */}
      </div>
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
