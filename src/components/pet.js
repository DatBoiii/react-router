import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        petList: [],
        petName: "", //placeholder to hold temporary form input
        petBreed:"",
        petAge:0
    };
  }

  handleNameInput(event) {
    let typedInput = event.taget.value;
    this.setState({petName:typedInput});
  }

  handleBreedInput(event) {
    let typedInput = event.taget.value;
    this.setState({petBreed:typedInput});
  }

  handleAgeInput(event) {
    let typedInput = event.taget.value;
    this.setState({petAge:typedInput});
  }

  handleClick() {
    let petObject = { petName: this.state.petName, 
                      petBreed: this.state.petBreed, 
                      petAge: this.state.petAge };
    this.setState({
      petList: [...this.state.petList, petObject],
      petName: "",
      petBreed: "",
      petAge: 0
    })

  }

  render() {
    let petElementArray = this.state.petList.map((animal, index) => {
      return (
        <div key={index}>
          <div>Name: {animal.petName}</div>
          <div>Breed: {animal.petBreed}</div>
          <div>Age: {animal.petAge}</div>
        </div>
      );
    })
    return (
      <div>
        <h4>Pet Store Animal List</h4>
        {petElementArray}
        <input defaultValue={this.state.petName} onChange={this.handleNameInput.bind(this)} placeholder="Pet Name"/>
        <input defaultValue={this.state.petBreed} onChange={this.handleBreedInput.bind(this)} placeholder="Pet Breed"/>
        <input defaultValue={this.state.petAge} onChange={this.handleAgeInput.bind(this)} placeholder="Pet Age"/>
        <button onClick={this.handleClick.bind(this)}>Add Animal</button>
      </div>
    );
  }
}

export default App;