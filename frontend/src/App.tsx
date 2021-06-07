import { useEffect } from 'react';
import { source } from "./source";
import calSalary from './utils/calSalary';
import Table from './components/table';
import Search from './components/search';
import Chart from './components/chart';
import { useGlobalContext } from './context'


import './App.css';


function App() {
  const { dispatch, state } = useGlobalContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(source);
        const data = await res.json();
        const agg = calSalary(data);
        dispatch({ type: 'FETCH', payload: agg });

      }
      catch (e) { console.error(e) }
    }
    fetchData();
  }, [dispatch]);


  useEffect(() => {

    dispatch({ type: 'FILTER' });

  }, [state.searchTerm,dispatch])


  if (state.searchMode) {
    return <><Search />
      <Table />
      <Chart />
    </>
  }
  else {

    return <>
      <Search />

      {state.primaryView && <Table></Table>}
      {!state.primaryView && <Chart />}
    </>

  }
}

export default App;
