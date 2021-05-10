import React, { PureComponent } from 'react';

class ListExample extends PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];
    const prices = priceList.map((price) => <div>가격: {price}원</div>);
    return (
      <div>
        <label>가격 목록</label>
        {prices}
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

ListExample.propTypes = {};

export default ListExample;
