import React, { Component } from 'react';

import BuildingForm from './building_form';

class SearchForm extends Component {

  render() {
    return (
      <div>

        <BuildingForm changePage={this.props.changePage} />

      </div>
    );
  }
}

export default SearchForm;
