import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const  Home= () => {
const handleClick=()=>{
  console.log('hello,ninjas');
}
const handleClickAgain =(name,e)=>{
  console.log('hello '+name,e.target);
}

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={handleClick}>click me</button>
    <button onClick={(e)=>handleClickAgain('mario',e)}>Click me again</button></div>
    );
}
 
export default Home;