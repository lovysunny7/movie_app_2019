import React from "react";
import PropTypes from "prop-types";

// ./ 의 의미는 같은 디렉토리에 있다는 뜻이다.
// function Food(props.fav)는 function Food ({fav})를 쓴 것과 동일하다.
// map takes array and returns array way the what we want
// *.propTypes로 이름을 명명해야지, 체크 가능함
// {/* Food Component에서 fav(favoirte)라는 prop에 kimchi라는 value를 준 것 */}
// {/* <Food fav="kimchi" /> */}
/*
 왜 function App 도 있는데, class App extends React.Component를 사용해야 하는가?
 그것은 바로 state 라는 기능을 사용할 수 있기 때문이다.
 state는 component의 data가 변하게 할 수 있다.

 */
class App extends React.Component {
  state = {
    count: 0
  };
  // 아래는 자바 스크립트 코드
  add = () => {
    // console.log("add");
    // this.state.count = 1; 이렇게 하게 되면 render을 다시 하지 않기 때문에 setState를 사용해야한다.
    // 사실 이와 같은 방법은 좋은 방법으로 추천되진 않는다.
    // this.setState({ count: this.state.count + 1 })
    // this.setState(current=>({count:current.count+1})) 라고 바꿀 수도 있다.
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}. </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Monus</button>
      </div>
    );
  }
}

export default App;
