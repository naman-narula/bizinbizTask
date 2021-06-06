import { useState, useEffect } from 'react';
import { source } from "./source";
import calSalary from './utils/calSalary';
import Table from './components/table';
import Search from './components/search';


import './App.css';


function App() {
  const [aggregate, setAggregate] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterList,setFilterList]=useState([]);




  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(source);
        const data = await res.json();

        const agg = calSalary(data);
        setAggregate(agg);
        setFilterList(agg);

      } catch (e) {

      }
    }
    fetchData();

  }, []);


  useEffect(()=>{
    const query=new RegExp(searchTerm,'i');
    setFilterList(()=>{
      const filteredCountry=aggregate.filter((country)=>{
        const temp=country.name.match(query);
        const {input}=temp===null?'':temp;
        return country.name===input;
      })
     
      return filteredCountry;
    })



  },[searchTerm])


  return <>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <Table aggregate={filterList}></Table>
  </>

}

export default App;
