import {useState,useEffect} from 'react';
import { source } from "./source";
import calSalary from './utils/calSalary';

import './App.css';


function App() {
  const [aggregate,setAggregate]=useState([]);



  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(source);
        const data = await res.json();

        const agg =calSalary(data);
       setAggregate(agg);
       console.log(agg);
       
      } catch (e) {
       
      }
    }
    fetchData();
   
  }, []);

  return <> I am app
  </>
 
}

export default App;
