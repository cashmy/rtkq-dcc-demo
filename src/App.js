import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incremented } from "./features/counter/counterSlice";
// import { useFetchBreedsQuery } from "./features/dogs/dogsApiSlice";
import { Counter } from "./features/counter/Counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // const [numDogs, setNumDogs] = useState(10);
  // const { data = [] } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    dispatch(incremented());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello dCC Class!</h3>
        <p>Let's Learn Redux Toolkit</p>

        <button type="button" onClick={handleClick}>
          Count is: {count}
        </button>
        <Counter />

        {/* Number of records to fetch */}
        {/* <div>
          <p>Dogs to fetch:</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div> */}

        <div>
          {/* Records actually fetched */}
          {/* <p>Number of dogs fetched: {data.length} </p> */}
          {/* Table of results */}
          {/* <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </header>
    </div>
  );
}

export default App;
