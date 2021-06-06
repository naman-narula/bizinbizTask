import styles from '../styles/search.module.css';
export default function Search({ searchTerm, setSearchTerm }) {

    function handlequery(e) {
        const { value } = e.target
        setSearchTerm(value);
    }
    return <div id={styles.searchBar}>

        <i className="fas fa-search fa-2x"></i>
        <input type="text" placeholder='Search' onChange={handlequery} value={searchTerm} />
    </div>

}