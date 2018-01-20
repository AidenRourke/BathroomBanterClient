import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { getWashrooms } from '../../../actions/index';

class FloorForm extends Component {

  onSubmit(values) {
    this.props.getWashrooms(this.props.building, values.floor, () => {
      this.props.changePage();
    });
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
    const { handleSubmit } = this.props;
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
        <div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
//Give us access to the number of floors
function mapStateToProps({ floors, building }) {
  return {
    building,
    floors
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
