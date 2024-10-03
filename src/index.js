// 1>  import the react and react dom lbrary
import React from 'react';
import ReactDOM from 'react-dom/client';
//2 > get a reference to the div element with id  as root
const el=  document.getElementById('root');
//3 > tell react to take control of the div element
const root = ReactDOM.createRoot(el);
//4 > create a component
function App(){
    return <h1>Hi there here</h1>;
}
//5 > show the component
root.render(<App />);