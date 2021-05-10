import { Component } from 'react';

class LifeCycleExample extends Component {
  // 컴포넌트 생성 단계 2단계
  // 컴포넌트 갱신 단계 1단계
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }
  // 컴포넌트 생성 단계 1단계
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor 호출');
  }
  // 컴포넌트 생성 단계 4단계
  componentDidMount() {
    console.log('componentDidMount 호출');
    this.setState({ updated: true });
  }

  // 컴포넌트 갱신 단계 2단계
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
    return false;
  }

  // 컴포넌트 갱신 단계 4단계
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    return {};
  }

  // 컴포넌트 갱신 단계 5단계
  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
  }

  // 컴포넌트 소멸 단계 1단계
  componentWillMount() {
    console.log('componentWillMount 호출');
  }

  // 컴포넌트 생성 단계 3단계
  // 컴포넌트 갱신 단계 3단계
  render() {
    console.log('render 호출');
    return null;
  }
}

export default LifeCycleExample;
