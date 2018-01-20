import React, { Component } from 'react';

import SearchForm from './search/search_form';

class MainPage extends Component {

  changePage() {
    this.props.history.push('/posts')
  }

  render() {
    return (
      <div className="MainPage">

        <SearchForm changePage={this.changePage.bind(this)}/>

      </div>
    );
  }
}

export default MainPage;
