import React, { useState } from 'react'
import "../Style/myComponentStyle.css"
const MyComponent = (props) => {
  const { firsName, lastName, age,  hairColor } = props; 
  const [newAge, setNewAge] = useState(age);
  return (
    <div className="apoyo">
      <h1>
          <strong>{lastName},{firsName}</strong>
      </h1>
      <h4>Age:{newAge}</h4>
      <h4>Hair Color:{hairColor}</h4>
      <div>
          <button onClick={() => setNewAge(newAge + 1)}>+</button>
      </div>
    </div>
  );
}

export default MyComponent;
