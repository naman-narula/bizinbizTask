function CountryDetail(countryName, salary) {
  this.name = countryName;
  this.salary = salary;
}


export default function calculateSalary(data) {
  const agg = data.reduce((agg, user) => {
    let { location, currSalary } = user;
    currSalary = parseInt(currSalary.substring(1), 10);
    if (!agg.salary.hasOwnProperty(location)) {
      agg.salary[location] = 0;
      agg.count[location + 'Count'] = 0;
    }
    agg.salary[location] += currSalary;
    agg.count[location + 'Count']++;

    return agg;
  },
    {
      salary: {},
      count: {}
    });


  let arr = [];
  for (let country in agg.salary) {
    agg.salary[country] = (agg.salary[country] / agg.count[country + 'Count']).toFixed(2);
    arr.push(new CountryDetail(country, agg.salary[country]));
  }


  return arr;
}

