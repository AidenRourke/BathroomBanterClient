import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { getWashrooms } from '../../../actions/index';

class FloorForm extends Component {
  onSubmit() {
    this.props.getWashrooms(/* Needs building and floor */);
    this.props.storeFloor(/* Stores the selected floor */)
  }

  renderOptions() {
    //don't forget to put an if statement here
    let options = [<option key={0}></option>];
    for (let i=0; i < this.props.floors; i++) {
      options.push(<option value={i+1} key={i+1}>{i+1}</option>)
    }
    return (
      options
    )
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))} >
        <div className="form-group">
          <label>Floor</label>
          <div>
            <Field name="floor" component="select" className="form-control">
              {this.renderOptions()}
            </Field>
          </div>
        </div>
        <div className="btn btn-primary" type="submit">Submit</div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.floors) {
    errors.floors="Please select a floor"
  }
  return errors;
}

//Give us access to the number of floors
function mapStateToProps({ floors }) {
  return {
    floors
  }
}

export default reduxForm({
  validate,
  form: "floors"
})(
  connect(mapStateToProps, { getWashrooms })(FloorForm)
);
