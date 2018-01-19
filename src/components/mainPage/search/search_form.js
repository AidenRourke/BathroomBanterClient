import React, { Component } from 'react';

import BuildingForm from './building_form';
import FloorForm from './floor_form';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      building: false
    }
  }

  changeSate() {
    this.setState({
      building: true
    });
  }

  renderFloorForm() {
    if (this.state.building) {
      return (
        <FloorForm />
      )
    }
    return;
  }

  render() {
    return (
      <div>
        
        <BuildingForm showFloorForm={() => this.changeSate()} />

        {this.renderFloorForm()}

      </div>
    );
  }
}

export default SearchForm;
