import { useState } from 'react'
import './App.css'


const App = () => {

  const [number, setNumber] = useState([]);

  function setNumberForm(buttonNumber){
    setNumber([...number, buttonNumber]);
  }

  function calculate(){
    const result = eval(number.join(''));
    setNumber([result]);
  }

  function Clear(){
    setNumber([]);
  }


  return(
    <>
      <div className='calculator'>
        <div className='input'>
          <input type="text" readOnly value={number.join('')}/>
        </div>
        <div className='numbers'>
          <button className='button' onClick={() => setNumberForm(0)}>0</button>
          <button className='button' onClick={() => setNumberForm(1)}>1</button>
          <button className='button' onClick={() => setNumberForm(2)}>2</button>
          <button className='button' onClick={() => setNumberForm(3)}>3</button>
          <button className='button' onClick={() => setNumberForm(4)}>4</button>
          <button className='button' onClick={() => setNumberForm(5)}>5</button>
          <button className='button' onClick={() => setNumberForm(6)}>6</button>
          <button className='button' onClick={() => setNumberForm(7)}>7</button>
          <button className='button' onClick={() => setNumberForm(8)}>8</button>
          <button className='button' onClick={() => setNumberForm(9)}>9</button>
          <button className='button' onClick={() => setNumberForm('+')}>+</button>
          <button className='button' onClick={() => setNumberForm('-')}>-</button>
          <button className='button' onClick={() => setNumberForm('*')}>x</button>
          <button className='button' onClick={() => setNumberForm('/')}>÷</button>
          <button className='button' onClick={() => calculate()}>=</button>
          <button onClick={()=>Clear()} className='button'>Clear</button>
        </div>
      </div>
    </>
  );
}

export default App;