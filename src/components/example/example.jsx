import React, { Component } from 'react';
import API from './API';

class Example extends Component {

  componentDidMount(){
    this.fetchData();
  }


  fetchData(){
      const url = "https://randomuser.me/api/?results=50&nat=us,dk,fr,gb";
      return fetch(url)
          .then(response => response.json())
          .then(parsedJSON => this.setState({results: parsedJSON.results}))
          .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <API dataObject={this.state.results}/>
      </div>
    );
  }
}

export default Example;

