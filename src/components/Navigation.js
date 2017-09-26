import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import CakeIcon from '../images/cake.svg';
import './Navigation.css';

import FlatButton from 'material-ui/FlatButton';

import Header from './Header'

export default class Navigation extends PureComponent {
  render(){
    return(
      <div className="app-bar">
        <AppBar
          iconElementLeft={<FlatButton label={<img src={CakeIcon} alt="QueRico" id='cake-icon' />}/>}
          title={<Header content='QueRico Woerden' />}
          iconElementRight={<FlatButton label='About us'/>}
        />
      </div>
    )
  }
}
