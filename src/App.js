import React, { Component } from "react";
import "./App.css";

class Logger extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), running: true };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          date: new Date()
        }),
      1000
    );
  }

  resetTimer = () => {
    this.setState({ running: !this.state.running });
  };

  componentWillUnmount() {
    console.log("New change");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="logger">
        <h1>This is my React date logger</h1>
        <p>
          The date is{" "}
          <span className="date">
            {this.state.running ? this.state.date.toLocaleString() : 0}
          </span>
        </p>
        <p>
          <button onClick={this.resetTimer}>Reset date</button>
        </p>
      </div>
    );
  }
}

export default Logger;
