import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


// </App> 형식으로 넣어주는 것은 Component를 html로 변환해 주기 위함이다.
// "root" 는 index.html의 <body>안에 <div id="root"> 형태에 <App/>을 그린다는 뜻이다.=> jsx

ReactDOM.render(<App />, document.getElementById("root"));
