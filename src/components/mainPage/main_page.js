import React, { Component } from 'react';

import SearchForm from './search/search_form';

class MainPage extends Component {

  changePage(building, floor, gender) {
    this.props.history.push(`/results/${building}/${floor}/${gender}`);
  }

  render() {
    return (
      <div>
        <h1>Bathroom Banter</h1>
        <h6>Select your preferences:</h6>
        <SearchForm changePage={this.changePage.bind(this)}/>
      </div>
    );
  }
}

export default MainPage;
