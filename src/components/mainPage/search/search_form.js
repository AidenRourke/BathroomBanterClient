import React, { Component } from 'react';

import BuildingForm from './building_form';
import FloorForm from './floor_form';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      floorsForm: false
    }
  }

  changeSate() {
    this.setState({
      floorsForm: true
    });
  }

  renderFloorForm() {
    if (this.state.floorsForm === true) {
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
