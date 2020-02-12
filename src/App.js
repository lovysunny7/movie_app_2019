import React from "react";
// ./ 의 의미는 같은 디렉토리에 있다는 뜻이다.
// function Food(props.fav)는 function Food ({fav})를 쓴 것과 동일하다.
// map takes array and returns array way the what we want
function Food({ name, image }) {
  return (
    <div>
      <h3> I love {name}</h3>
      <img src={image} alt={name} />
    </div>
  );
}

const foodLove = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6QQ67F8y2b8%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
    id: 3,
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffoodingbox.com%2Fweb%2Fproduct%2Fbig%2F201706%2F18_shop1_970227.jpg&f=1&nofb=1"
  },
  {
    id: 4,
    name: "Kimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeTucCw1w6Ak%2Fmaxresdefault.jpg&f=1&nofb=1"
  },
  {
    id: 5,
    name: "Samkiopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99663B335A22340228&f=1&nofb=1"
  }
];

function renderFood(dish) {
  //console.log(dish);
  return <Food key={dish.id} name={dish.name} image={dish.image} />;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {/* Food Component에서 fav(favoirte)라는 prop에 kimchi라는 value를 준 것 */}
      {/* <Food fav="kimchi" /> */}
      {foodLove.map(renderFood)}
    </div>
  );
}

export default App;
