import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../photo.png'

class Navbar extends Component {

  render() {
    return (
      <nav style={{backgroundColor: '#FFD700' }} className="navbar  fixed-top  flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
         
          target="_blank"
          rel="noopener noreferrer"
        >
          { <img src="cryptologo.png" width="85" height="85" className="d-inline-block align-top" alt="" /> }
           
        </a>
        <h4 style={{ position: 'absolute', top:'10px', left:'10%', fontFamily: 'fantasy', fontSize:'20px' } } >Place to smart your contracts</h4>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small style={{color: 'black'}} id="account">{this.props.account}</small>
            </small>
            { this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;