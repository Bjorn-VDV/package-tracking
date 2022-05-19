import './App.css';
import Datashow from './datashow';
import DataPrint from './dataprint';
import { useState, useEffect } from 'react';

function App()
{
  const [data, setData] = useState([]);
  const [packageChoice, setPackageChoice] = useState();
  const [packagePick, setpackagePick] = useState();
  useEffect(() =>
  {
    // This way fetchData won't re-assigned on every render
    async function fetchData()
    {
      console.log("calling api .. ");
      const res = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');
      res.json().then(res => setData(res));

    }

    fetchData();
  }, []);

  // I used packages.id == value first, and this worked.
  // The code then gave a warning and said it expected '==='
  // I changed it, and my code broke. == was the correct use, but React loves to cry.
  // I caved and forced both to be numbers just to rid the warning. Why, React? Why do you do this?
  let togglePackage = (value) =>
  {
    const packages = data.find(packages => Number(packages.parcel_id) === Number(value))
    setPackageChoice(packages)
  }

  let handlePrint = () =>
  {
    setpackagePick(packageChoice)
  }

  return (
    <>
      <Datashow data={data} togglePackage={togglePackage} />
      <button onClick={handlePrint}>Check information</button>
      <DataPrint packageChoice={packagePick} />
    </>
  );
}

export default App;
