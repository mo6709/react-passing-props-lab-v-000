import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }
  
  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }
  
  fetchFruit = () =>  {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  updateFilter = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    return(
      <div>
        <FruitBasket 
          fruit={this.state.fruit}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}
          updateFilterCallback ={this.updateFilter}   
        />
      </div>
    );
  }
}

App.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: ()=>{}
}

export default App;