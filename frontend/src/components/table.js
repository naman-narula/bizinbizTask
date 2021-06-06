import styles from '../styles/table.module.css';
export default function Table({ aggregate }) {
    return <main >
        <div className={styles.appLayout} id={styles.headings} >
            <h1>Location</h1>
            <h1>Salary</h1>
        </div>
        
        {   
            aggregate.map((country, index) => {
                const { name, salary } = country
                return <div key={index} className={styles.appLayout} id={styles.content}>
                    <h1>{name}</h1>
                    <h1>${salary}</h1>
                </div>
            })
        }
    </main>
}