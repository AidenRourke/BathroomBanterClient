import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { getFloors, storeBuilding } from '../../../actions/index';

class BuildingForm extends Component {
  onSubmit(values) {
    this.props.getFloors(values.building); //Gets the number of floors for the building
    this.props.storeBuilding(values.building); //Stores the building selected
    this.props.showFloorForm();
  }

  //WILL SOON BE REPLACED BY THE ABILITY TO AUTOMATICALLY SELECT CLOSEST BUILDING
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <div className="form-group">
          <label>Building</label>
          <div>
            <Field name="building" component="select" className="form-control">
              <option></option>
              <option value="Herzberg+Laboratories">Herzberg Laboratories</option>
            </Field>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-success btn-sm">Next</button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.building) {
    errors.building="Please select a building"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "building"
})(
  connect(null, { getFloors, storeBuilding })(BuildingForm)
);
