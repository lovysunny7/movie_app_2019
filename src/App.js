import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

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
    isLoading: true,
    movies: []
  };

  /* 
이론적으로 우리는 componentDidMount에서 data를 fetch하는 것이다.
=> api로부터 data fetching이 완료 => render
  */

  componentDidMount() {
    // setTimeout은 JS 꺼
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
