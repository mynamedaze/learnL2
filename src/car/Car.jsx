import React from 'react';
import SelectCar from './SelectCar';
import InputCar from "./InputCar";
import carOptions from "./carOptions";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: carOptions[0]
    };

    this.changeSelect = this.changeSelect.bind(this);
    //
    // this.saveValue = this.saveValue.bind(this);
  }

  changeSelect(event) {
    this.setState({value: event.target.value});
    console.log('event11: ' + event.target.value);
  }
  //
  // saveValue()
  // {
  //   let myHome = carOptions.find(item => item === document.getElementById("select").value);
  //   let ind = carOptions.indexOf(myHome);
  //   let cars = carOptions;
  //   let inpValue = document.getElementById("add").value;
  //   cars[ind] = inpValue;
  //   this.setState({cars: cars});
  //   return cars;
  // }

  render() {
    console.log('fdsfds', this.state.value);
    return (
      <div>
          <SelectCar changeSelect={this.changeSelect}  />
          <InputCar changeSelect={this.changeSelect} />
          <button>Save</button>
      </div>
    )
  }
}

export default Car;