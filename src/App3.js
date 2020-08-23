import React from 'react';
import axios from 'axios';
class App extends React.Component {
  state = {
    isLoading: true,  //로딩 상태 구분코드
    movies: [], //영화 정보를 저장할 state
  };

  getMovies = async () => { //async, await로 
    //api로 호출한 영화정보를 movies에 저장
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);  //호출한 영화정보 출력
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
  const {isLoading} = this.state;
  return <div>{isLoading ? 'Loading...' : 'We are Ready'}</div>;
 }
}
export default App;