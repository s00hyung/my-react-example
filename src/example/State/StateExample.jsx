import React, { Component } from 'react';
/*
State를 사용할 떄 주의할 점 
1. constructor에서 반드시 초기화해야 한다. (값이 없으면 빈객체라도 넣는다)
2. state값을 변경할때는 setState() 함수를 반드시 사용한다. (그래야 리엑트 엔진이 render 해준다)
3. setState() 함수는 비동기로 처리되며, 
    setState()코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화가 된다.
*/
class StateExample extends Component {
  constructor(props) {
    super(props);
    // State 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };
    //????
    this.handleData = this.handleData.bind(this);
    // 4초뒤에 handleData 함수 호출
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state;

    // state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
  }
  render() {
    return (
      <div>
        {/* state데이터는 this.state로 접근 가능합니다 */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
