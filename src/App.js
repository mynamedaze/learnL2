import React from 'react';
import './App.css';
import Car from './Car.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {
          id: 'MB-default',
          name: 'Mercedes-Benz',
          year: 2019
        },
        {
          id: 'Koenigsegg-default',
          name: 'Koenigsegg',
          year: 2017
        },
        {
          id: 'Pagani-default',
          name: 'Pagani',
          year: 2019
        }
      ],
      pageTitle: 'Список машин',
      showCars: false
    };

  }

  onChangeName = (carName, index) => {
    const car = this.state.cars[index];
    car.name = carName;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars
    })
  };

  deleteHandler = (index) => {
    const cars = this.state.cars.concat();

    cars.splice(index, 1);
    this.setState({
      cars: cars
    })
  };

  toggleCars = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  };

  render() {

    let { cars, showCars } = this.state;


    return (

      <div>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCars}>Toggle cars</button>

        { showCars && cars.map((car, index) => {
          return (
            <Car
              key={car.id}
              name={car.name}
              year={car.year}
              deleteHandler={() => this.deleteHandler(index)}
              onChangeName={(e) => this.onChangeName(e.target.value, index)}
            />
          )
        })}
      </div>
    )
  }


}

export default App;
