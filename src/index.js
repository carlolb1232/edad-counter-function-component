import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyComponent from './Components/MyComponent';
import userObject from './Data/users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='mycomponents-container'>
      {
        userObject.map(({firsName, lastName, age, hairColor})=>{
          return <MyComponent firstName={firsName} lastName={lastName} age={age} hairColor={hairColor}/>
        })
      }
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
