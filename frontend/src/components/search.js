import styles from '../styles/search.module.css';
import {useGlobalContext} from '../context'
export default function Search() {
    const {dispatch,state:{searchTerm,primaryView}}=useGlobalContext();


    function handlequery(e) {
        const { value } = e.target;
        dispatch({type:'SEARCH',payload:value});
      
    }
    return <div id={styles.searchBar}>
       
        <i className="fas fa-search fa-2x"></i>
        <input type="text" placeholder='Search' onChange={handlequery} value={searchTerm} />
        <button onClick={()=>dispatch({type:'TOGGLE-VIEW'})}>Show { primaryView===true?'Charts View':'Table view'}</button>
    </div>

}