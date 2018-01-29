import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { getFloors, storeInformation } from '../../../actions/index';

class BuildingForm extends Component {
  onSubmit(values) {
    this.props.getFloors(values.building); //Gets the number of floors for the building
    this.props.storeInformation(values.building, values.gender, values.sortBy); //Stores the building selected
    this.props.showFloorForm();
  }

  renderMenu({ information, input, label, meta: { touched, error } }) {
    return (
      <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <select className="form-control" {...input} >
          { this.renderOptions(information) }
        </select>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  renderOptions(information) {
    if (information) {
      let options = [<option key={0}></option>];
      information.map(item =>
        options.push(<option value={item.value} key={item.value}>{item.name}</option>)
      );
      return options;
    }
  }


  //WILL SOON BE REPLACED BY THE ABILITY TO AUTOMATICALLY SELECT CLOSEST BUILDING
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field name="gender"
          component={this.renderMenu.bind(this)}
          label="Gender"
          information={[
            {name: "Male", value: "Male"},
            {name: "Female", value: "Female"}
          ]}/>
        <Field
          name="sortBy"
          component={this.renderMenu.bind(this)}
          label="Sort By"
          information={[
            {name: "Average Rating", value: "average_rating"},
            {name: "Cleanliness", value: "cleanliness"},
            {name: "Toilet Paper", value: "toilet_paper"},
            {name: "Traffic", value: "traffic"}
          ]}/>
        <Field
          name="building"
          component={this.renderMenu.bind(this)}
          label="Building"
          information={[
            {name: "Herzberg Laboratories", value: "Herzberg+Laboratories"},
            {name: "Richcraft Hall", value: "Richcraft+Hall"}
          ]}/>
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
    errors.building="Please select a building";
  }
  if (!values.gender) {
    errors.gender="Please select a gender";
  }
  if (!values.sortBy) {
    errors.sortBy="Please select a sort";
  }

  return errors;
}

export default reduxForm({
  form: "building",
  validate
})(
  connect(null, { getFloors, storeInformation })(BuildingForm)
);
