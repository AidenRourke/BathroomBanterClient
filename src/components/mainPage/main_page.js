import React, { Component } from 'react';

import SearchForm from './search/search_form';
import SearchResults from './results/search_results'

class MainPage extends Component {

  render() {
    return (
      <div className="MainPage">

        <SearchForm />

      </div>
    );
  }
}

export default MainPage;
