import React, {Component} from 'react';

const API = 'http://localhost:4000/tickets.json';

class Ticket extends Component {
  constructor(props) {
     super();
     this.state = { items: [] };
   }

   componentDidMount() {
     fetch('http://localhost:4000/tickets')
       .then((response) => response.json())
       .then((items) => 
         this.setState({items})
       )
       .catch((error) => {
         console.error(error);
       })
   }

  render () {
    return (
      <div>
        <h2>List of the Tickets</h2>
        <ul>
          <span>{this.state.items.map(item => <li key={item.id}>{item.title}</li>)}</span>
        </ul>
      </div>
    );
  }
}

export default Ticket;