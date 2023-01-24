import {useState, useMemo} from 'react'
import './App.css';

const default_weight = 180
const default_height = 70

function App() {
  const [weight, setWeight] = useState(default_weight)
  const [height, setHeight] = useState(default_height)

  function handleWeightChange(e) {
    const inputWeight = e.target.value
    setWeight(inputWeight)
  }

  function handleHeightChange(e) {
    const inputHeight = e.target.value
    setHeight(inputHeight)
  }

  const result = useMemo(() => {
    const squareHeight = height * height;
    const conversionFactor = 703;
    return Math.floor((weight / squareHeight * conversionFactor))
  }, [height, weight])

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p>Weight: {weight} lbs</p>
        <input
          className='input-slider'
          onChange={handleWeightChange}
          type="range"
          step="1"
          min="70"
          max="400" 
        />
        <p>Height: {height} in</p>
        <input
          className='input-slider' 
          onChange={handleHeightChange}
          type="range"
          step="1"
          min="48"
          max="96"
        />
      </div>
      <p>Your BMI is: </p>
      <p>{result}</p>
    </div>
  );
}

export default App;
