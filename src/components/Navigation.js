import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import CakeIcon from '../images/cake.svg';
import './Navigation.css';

import FlatButton from 'material-ui/FlatButton';

import Header from './Header'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class Navigation extends PureComponent {
  renderCakeContainer = () => {
    this.props.push('/cakes')
  };

  goHome = () => {
    this.props.push('/')
  };

  render(){
    return(
      <AppBar
        iconElementLeft={<FlatButton onClick={this.goHome} label={<img src={CakeIcon} alt="QueRico" id="cake-icon"/>}/>}
        title={<Header content='QueRico Woerden' />}
        iconElementRight={<FlatButton label='Cakes' onClick={this.renderCakeContainer}/>}
      />
    )
  }
}

export default connect(null, { push })(Navigation)
