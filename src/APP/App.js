import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import globalContext from "./globalContext"

//Importing components from local folder
import { Home } from '../global'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      setData(response.data);
    });
  }, [])

  return (
    <>
      <globalContext.Provider value={data}>
        <Home />
      </globalContext.Provider>
    </>
  );
}

export default App;
