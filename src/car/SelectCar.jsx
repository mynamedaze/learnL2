import React from 'react';
import carOptions from "./carOptions";

class SelectCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    this.setState({value: e.target.value});
    this.props.changeSelect(e);

  }

  render() {
    return (
      <div>
        <select name="cars" id="select" value={this.state.value} onChange={(e) => {this.onValueChange(e)}}>
          {carOptions.map((item, i) =>{
          return (
            <option key={i} value={item}>{item}</option>
          )
        })}
        </select>
      </div>
    );
  }
}

export default SelectCar;