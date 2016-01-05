/*
  使用Ace Admin Template的导航条组件
*/


import React, { Component, PropTypes } from 'react';
import UserInfo from './NavBar/UserInfo';
import { title, description } from '../../config';

class NavBar extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
        <div id="navbar" className="navbar navbar-default">
            <button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
                <span className="sr-only">Toggle sidebar</span>

                <span className="icon-bar"></span>

                <span className="icon-bar"></span>

                <span className="icon-bar"></span>
            </button>

            <div className="navbar-header pull-left">
                <a href="#" className="navbar-brand">
                    <small>
                        <i className="fa fa-leaf"></i>
                        {title}
                    </small>
                </a>
            </div>

            <UserInfo />
        </div>
    );
  }

}

export default NavBar;
