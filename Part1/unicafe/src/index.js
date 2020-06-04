import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props)=>{
  return(
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = ({good, bad, neutral})=>{
  let total = good+bad+neutral;
  return (
    <div>
       <h1>statistics</h1>
      <Display text="good" value={good}/>
      <Display text="neutral" value={neutral}/>
      <Display text="bad" value={bad}/>
      <Display text='all' value={total} />
      <Display text="average" value={(good+bad*-1)/total} />
      <Display text="positive" value={100*good/total}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={()=>setGood(good+1)}/>
      <Button text="neutral" handleClick={()=>setNeutral(neutral+1)}/>
      <Button text="bad" handleClick={()=>setBad(bad+1)}/>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)