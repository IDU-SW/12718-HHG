import React from 'react';
import axios from 'axios';
import Movie from './Movie';
class App extends React.Component {
  state = {
    isLoading: true,  //로딩 상태 구분코드
    movies: [], //영화 정보를 저장할 state
  };

  getMovies = async () => { //async, await로 
    //api로 호출한 영화정보를 movies에 저장
    
    const {
      data: {
        data: {movies},
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by_rating");
    // console.log(movies);  //호출한 영화정보 출력
    this.setState({movies, isLoading: false}); //변수와 키 이름이 같다면 축약 가능, movies: movies와 동일
  }

  componentDidMount() {
    //영화 데이터 로딩! 

    // setTimeout(() => {
    //   //6초후 isLoading state를 false로 변경
    //   this.setState({ isLoading: false });
    // }, 6000);

    this.getMovies();
  }
 render() {
  const {isLoading, movies} = this.state;
  return <div>{isLoading ? 'Loading...' : movies.map(
    (movie) => {
      console.log(movie);
      return <movie
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
      />;
    }
  )}</div>;
 }
}
export default App;