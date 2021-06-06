export default function Table({ aggregate }) {
    return <>
        {
            aggregate.map((country, index) => {
                const { name, salary } = country
                return <div key={index}>
                    <h1>{name}:{salary}</h1>
                </div>
            })
        }
    </>
}