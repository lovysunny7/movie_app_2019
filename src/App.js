import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// ./ 의 의미는 같은 디렉토리에 있다는 뜻이다.
// function Food(props.fav)는 function Food ({fav})를 쓴 것과 동일하다.
// map takes array and returns array way the what we want
// *.propTypes로 이름을 명명해야지, 체크 가능함
// {/* Food Component에서 fav(favoirte)라는 prop에 kimchi라는 value를 준 것 */}
// {/* <Food fav="kimchi" /> */}
/*
 왜 function App 도 있는데, className App extends React.Component를 사용해야 하는가?
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

  getMovies = async () => {
    /* api 이기 때문에 시간이 조금 걸릴 수 있다는 것을 알려줘야 한다.
     async 는 비동기라고 언급해주는 건데, 이말은 "너는 이걸 기다려야 해"
     라고 말해주는 것이다. javaScript 신기하다. */

    // // 오래된 문법
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);

    // ES6 최신 문법
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
