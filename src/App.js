import React, { Component } from 'react';

class App extends Component {
  render() {
    const equation = (a, b, c) => (x) => x * a * b + c;
    const formula = equation(2, 3, 4);
    const x = 10;
    const result = formula(x);
    return <div>{result}</div>;
  }
}

export default App;
