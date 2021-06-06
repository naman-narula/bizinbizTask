export default function Search({ searchTerm, setSearchTerm }) {


    function handlequery(e) {
        const { value } = e.target
        setSearchTerm(value);
    }
    return <>
        <input type="text" placeholder='search' onChange={handlequery} value={searchTerm} />
    </>
}