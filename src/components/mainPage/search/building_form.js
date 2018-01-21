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

  renderMenu(field) {
    const { input, label } = field;
    return (
      <div className={`form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <select className="form-control" { ...input }>
          <option></option>
          <option value="Herzberg+Laboratories">Herzberg Laboratories</option>
          <option value="Richcraft+Hall">Richcraft Hall</option>
        </select>
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }


  //WILL SOON BE REPLACED BY THE ABILITY TO AUTOMATICALLY SELECT CLOSEST BUILDING
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field name="building" component={this.renderMenu} label="Building"/>
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
    errors.building= "Please select a building";
  }

  return errors;
}

export default reduxForm({
  form: "building",
  validate
})(
  connect(null, { getFloors, storeBuilding })(BuildingForm)
);
