import React from 'react';

class App extends React.Component { //React.Component 상속
  constructor(props) {  //component 생성
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

  componentDidMount() { //component가 render 된 직후
    console.log('componentDidMount');
  }

  componentDidUpdate() {  //props나 state가 수정되고 rendering된 후
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
