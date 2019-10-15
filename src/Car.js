import React from 'react';


class Car extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>Car name: {this.props.name}</h3>
        <p>Year <strong>{this.props.year}</strong></p>
        <input type="text" onChange={this.props.onChangeName} value={this.props.name}/>
        <button onClick={this.props.deleteHandler}>Delete</button>
      </div>
    )
  }
}

export default Car;