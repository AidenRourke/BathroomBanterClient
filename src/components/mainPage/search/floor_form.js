import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { getWashrooms } from '../../../actions/index';

class FloorForm extends Component {

  onSubmit({ floor }) {
    const { changePage, information: { building, gender, sort } } = this.props;
    this.props.getWashrooms(building, floor, gender, sort, changePage);
  }

  renderFloors({ input, label, meta: { touched, error } }) {
    return (
      <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <select className="form-control" {...input} >
          { this.renderOptions() }
        </select>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderOptions() {
    const { floors } = this.props;
    if (floors) {
      let options = [<option key={0}></option>];
      floors.map(floor =>
        options.push(<option value={floor} key={floor}>{floor}</option>)
      );
      return options;
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >
        <Field name="floor" component={this.renderFloors.bind(this)} label="Floor" />
        <div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
//Give us access to the number of floors
function mapStateToProps({ floors, information }) {
  return {
    floors,
    information
  }
}

function validate(values) {
  const errors = {};
  if (!values.floor) {
    errors.floor="Please select a floor"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "floor"
})(
  connect(mapStateToProps, { getWashrooms })(FloorForm)
);
