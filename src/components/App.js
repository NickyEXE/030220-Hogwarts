import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "../containers/HogsContainer";
import Filter from "./Filter"


class App extends Component {

  state = {
    greasy: false,
    weightSort: false
  }

  toggle = (key) => this.setState({[key]: !this.state[key]})

  filteredHogs = () => this.state.greasy ? hogs.filter(hog => !!hog.greased) : [...hogs]

  sortedHogs = () => this.state.weightSort
    ? this.filteredHogs().sort((a, b) => b.weight - a.weight)
    : this.filteredHogs().sort((a, b) => a.name.localeCompare(b.name))

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter greaseToggle={() => this.toggle("greasy")} weightToggle={() => this.toggle("weightSort")} {...this.state} />
        <HogsContainer hogs={this.sortedHogs()} />
      </div>
    );
  }
}

export default App;
