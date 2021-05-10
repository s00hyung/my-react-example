import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this와 바인드를 해야만 increaseCounter, resetCounter 접근 가능.
    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        현재카운트: {this.state.count}
        <button onClick={this.increaseCount} onMouseOut={this.resetCount}>
          카운트 증가
        </button>
        버늩밖으로 커서가 움직이면 0으로 초기화됩니다.
      </div>
    );
  }
}

export default Counter;
