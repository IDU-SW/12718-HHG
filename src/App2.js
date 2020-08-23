import React from 'react';
import PropTypes from 'prop-types';

// function Food(props){
//   console.log(props)
//   return <h3>I like {props.fav}{props.somethings}</h3>;
// }

function Food(props){
  console.log(props)
  return (
    <div>
      <h2>I like {props.name}</h2>
      <h4>{props.rating}/5.0</h4>
      <img src={props.picture} alt={props.name} /> 
    </div>
  );
}
Food.propTypes = {  //함수 필수 파라미터값 검사 및 자료형 검사
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
    'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.5,
  }
];
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
// function App(){
//   return (
//   <div>
//     Hello world!!!
//     <Potato />
//     <Food fav="kimchi" somethings={1} /> {/*prop 예제, 문자열이 아닐경우 {}으로 감싸야함*/}
//   </div>);
// }

function App(){   //맵 실습용
  return (
  <div>
    {/* key props는 리액트 내부에서 사용되는 특수한 props라서 Food 컴포넌트에 직접 전달되지 않는다. */}
    {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    {/* {foodILike.map((renderFood))} */}
  </div>);
}

export default App;