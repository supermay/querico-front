import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render(){
    return (
      <h2 className='querico'>{this.props.content}</h2>
    )
  }
}

export default Header;
