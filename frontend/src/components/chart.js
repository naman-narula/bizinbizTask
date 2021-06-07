import { Bar } from 'react-chartjs-2';
import { useGlobalContext } from '../context'
export default function Chart()
{ 
  const {state:{filterList}}=useGlobalContext();


    const data = {
        labels:filterList.map(({name})=>name),
        datasets: [
          {
            label: 'Avg Salary',
            data: filterList.map(({salary})=>salary),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          
          },
        ],
      };

      
        const options={
          scales: {
            x: {
              title: {
                color: 'blue',
                display: true,
                text: 'countries',
                font:{
                    size:20
                }
              }
            },
            y: {
                title: {
                  color: 'blue',
                  display: true,
                  text: 'AvgSalary',
                  font:{
                      size:20
                  }
                }
              }
          }
        }
    

      
    return <Bar data={data} options={options}></Bar> 
}