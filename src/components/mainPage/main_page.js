import React, { Component } from 'react';

import SearchForm from './search/search_form';

class MainPage extends Component {

  changePage() {
    this.props.history.push('/results')
  }

  render() {
    return (
      <div>
        <h1>Bathroom Banter</h1>
        <h6>Select a building and a floor:</h6>
        <SearchForm changePage={this.changePage.bind(this)}/>

      </div>
    );
  }
}

export default MainPage;
