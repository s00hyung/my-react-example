import React, { Component } from 'react';
import ChildComponent from './example/ChildComponent';

class App extends Component {
  render() {
    return (
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={[1, 2, 3]}
        objValue={{ name: '제목', age: 30 }}
        nodeValue={<h1>노드</h1>}
        fnucValue={() => {
          console.log('메시지');
        }}
      />
    );
  }
}

export default App;
