import React, { Component } from 'react';
import ChildProperty from './jsx.example/ChildProperty';
import DefaultPropsComponent from './jsx.example/DefaultPropsComponent';

class App extends Component {
  render() {
    return (
      <div>
        <ChildProperty>
          <div>
            <span>자식노드</span>
          </div>
        </ChildProperty>
      </div>
    );
  }
}

export default App;
