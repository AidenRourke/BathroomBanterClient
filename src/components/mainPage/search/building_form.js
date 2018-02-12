import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';

//Remove all instances of get floor and add a new action that will get building information
//Import get washrooms
import { storeInformation, getWashrooms } from '../../../actions/index';

class BuildingForm extends Component {
  //State will contain: A boolean to indicate if values.building has information and the list of buildings information
  constructor(props) {
    super(props);
    this.state = {
      listOfBuildings: {}
    }
  }

  //Use component did mount to make ajax request to get building and floor information
  componentDidMount() {
    axios.get("http://localhost:8080/listOfBuildings")
      .then(res => {
        this.setState({ listOfBuildings: res.data.listOfBuildings })
      });
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
        options.push(<option value={item.value} key={item.name}>{item.name}</option>)
      );
      return options;
    }
  }

  renderFloors() {
    if (this.props.buildingValue) {
      let floors = []
      this.state.listOfBuildings.map(building => {
        let buildingName = building.name.substr(1).replace(/\s/g, '+');
        if (buildingName === this.props.buildingValue) {
          building.listOfFloors.map(floor => {
            floors.push(floor);
          })
        }
      })
      return (
        <Field
          name="floor"
          component={this.renderMenu.bind(this)}
          label="Floor"
          information={floors.map(floor => {
            return { name: floor, value: floor }
          })}/>
      );
    }
    else return <div />
  }

  onSubmit(values) {
    const { building, gender, sortBy, floor } = values;
    this.props.storeInformation(building, gender, sortBy, floor); //Stores the building selected
    this.props.getWashrooms(building, floor, gender, sortBy, this.props.changePage)
  }

  //Add rendering of the foor form
  //If statement to make sure that the data we want exists
  render() {
    if (!_.isEmpty(this.state.listOfBuildings)) {
      const { handleSubmit } = this.props;
      return (
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field
            name="gender"
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
            information={this.state.listOfBuildings.map(item => {
              let value = item.name.substr(1);
              value = value.replace(/\s/g, '+');
              return { name: item.name, value }
            })}/>
          {this.renderFloors()}
          <div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      );
    }
    else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

//Add validation for floors
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
  if (!values.floor) {
    errors.floor="Please select a floor";
  }

  return errors;
}

function mapStateToProps(state) {
  const selector = formValueSelector("building");
  const buildingValue = selector(state, "building");
  return { buildingValue };
}

export default reduxForm({
  form: "building",
  validate
})(
  connect(mapStateToProps, { storeInformation, getWashrooms })(BuildingForm)
);
