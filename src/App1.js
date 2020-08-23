import React from 'react';

class App extends React.Component { //React.Component 상속
  constructor(props) {  //생명주기 render보다 다음
    super(props);
    console.log('constructor vs render');
  }

  state = {
    count: 0,
  }
  add = () => {
    console.log('add');
    this.setState({count: this.state.count+1}); //react식 증감
  };
  minus = () => {
    console.log('minus');
    this.setState({count: this.state.count-1}); //react식 증감
  };

  componentDidMount() { //화면 종료시
    console.log('componentDidMount');
  }

  componentDidUpdate() {  //화면 업데이트시
    console.log('I just updated');
  }

  render() {
    console.log("I'm rendering"); //생명주기 제일 첫단계
  return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  );
  }
}

export default App;
