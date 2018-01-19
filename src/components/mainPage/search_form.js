import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

class SearchForm extends Component {

  numberOfFloors() {
    //Must make request to the server to find out the number of floors a building has then give that many options
    //Can only show after the building has been selected
    console.log(this.props.form);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Building</label>
          <div>
            <Field name="building" component="select">
              <option></option>
              <option value="Herzberg+Laboratories">Herzberg Laboratories</option>
            </Field>
          </div>
        </div>
        {this.numberOfFloors()}
      </form>
    );
  }
}

function mapStateToProps({ form }) {
  return { form: form}
}

export default reduxForm({
  form: "Search Form"
})(
  connect(mapStateToProps, null)(SearchForm)
);
