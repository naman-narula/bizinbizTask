import { useState, useEffect } from 'react';
import { source } from "./source";
import calSalary from './utils/calSalary';
import Table from './components/table';
import Search from './components/search';


import './App.css';


function App() {
  const [aggregate, setAggregate] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');




  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(source);
        const data = await res.json();

        const agg = calSalary(data);
        setAggregate(agg);
        console.log(agg);

      } catch (e) {

      }
    }
    fetchData();

  }, []);


  return <>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <Table aggregate={aggregate}></Table>
  </>

}

export default App;
