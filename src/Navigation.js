import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';

class Navigation extends Component {
   render() {
      return (
         <div>
            {/* these are the links, can be navigation bar */}
            <Switch>
            <ul>
               <li><Link to={'/'}>Home</Link></li>
               <li><Link to={'/Login'}>Login</Link></li>
            </ul>
            </Switch>
         </div>
      );
   }
}
export default Navigation;