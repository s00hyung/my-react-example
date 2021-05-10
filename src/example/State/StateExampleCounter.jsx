import React, { Component } from 'react';

class StateExampleCounter extends Component {
  constructor(props) {
    super(props);
    // State 정의
    this.state = {
      count: 0,
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return (
      <div>
        {/* state데이터는 this.state로 접근 가능합니다 */}
        <span>카운트: {String(this.state.count)}</span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default StateExampleCounter;
