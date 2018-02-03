import React, { Component } from 'react';

import BuildingForm from './building_form';
import FloorForm from './floor_form';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      floorForm: false
    }
  }

  changeSate() {
    this.setState({
      floorForm: true
    });
  }

  renderFloorForm() {
    if (this.state.floorForm) {
      return (
        <FloorForm changePage={this.props.changePage}/>
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
