import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "December 25, 2020", newDeadline: "" };
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <div>
          <input
            placeholder="new date"
            onChange={(event) =>
              this.setState({ newDeadline: event.target.value })
            }
            required
          />
          <button onClick={() => this.changeDeadline()}>sumbit</button>
        </div>
      </div>
    );
  }
}

export default App;
