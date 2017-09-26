import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render(){
    return(
      <div className="querico">
        <h1>{this.props.content}</h1>
      </div>
    )
  }
}

export default Header;
