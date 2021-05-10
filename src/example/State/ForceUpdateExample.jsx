import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    // State 정의
    this.loading = true;
    this.formData = 'no data';
    //????
    this.handleData = this.handleData.bind(this);
    // 4초뒤에 handleData 함수 호출
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        {/* state데이터는 this.state로 접근 가능합니다 */}
        <span>로딩중: {String(this.loading)}</span>
        <span>결과: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
