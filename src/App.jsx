import './App.css'
import { useState, useEffect} from 'react'


const App = () => {
  const [clicked, setClicked] = useState(false);
  const [fact, setFact] = useState([])
  const apiKey = "aDmMK2jUfo670OQgB5BJ+w==e1iYNPzPtLGslBs7";
  useEffect(()=>{
    fetch(`https://api.api-ninjas.com/v1/facts`, {
      headers:{
        "X-Api-Key": apiKey
      }
    })
    .then(res => res.json())
    .then(data => setFact(data))
    .catch(err => console.log(err));
  }, [clicked])

  console.log(fact)

  return(
    <>
      <h1>Welcome to the facts website</h1>
      <div className='content'>
        <h1 className='factHeading'>Fact:</h1>
        <div className='factBox'>
          <h4 className='fact'>
            {fact[0]?.fact}
          </h4>
        </div>
      </div>
      <button onClick={()=> setClicked(c => !c)}>Another Fact</button>
    </>
  );
}

export default App;