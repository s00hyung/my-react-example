import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../example/State/Input';

describe('<Input>', () => {
  if (
    ('renders witout crashing',
    () => {
      const div = document.createElement('div');
      ReactDOM.render(<Input name="name" />, div);
      ReactDOM.unmountComponentAtNode(div);
      expect(React.isValidElement(<Input name="test_name" />)).toBeTruthy();
    })
  );
});
