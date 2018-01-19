import React, { Component } from 'react';

import SearchForm from './search_form';
import SearchResults from './search_results'

class MainPage extends Component {

  render() {
    return (
      <div className="MainPage">

        <SearchForm />

        <SearchResults />

      </div>
    );
  }
}

export default MainPage;
