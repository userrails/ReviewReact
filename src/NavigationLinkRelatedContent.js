import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Ticket from './Ticket';

class NavigationLinkRelatedContent extends Component {
   render() {
      return (
         <div>
            {/* this is exactly where the component will render */}
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/Login' component={Login} />
               <Route exact path='/Ticket' component={Ticket} />
            </Switch>
         </div>
      );
   }
}
export default NavigationLinkRelatedContent;