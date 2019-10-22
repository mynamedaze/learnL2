import React from 'react';

class InputCar extends React.Component {
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
      <input type="text" id="add" value={this.state.value} onChange={(e) => {this.onValueChange(e)}}/>
    )
  }
}

export default InputCar;