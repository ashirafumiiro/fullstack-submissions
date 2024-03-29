import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props)=>{
  return(
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const Statistics = ({good, bad, neutral})=>{
  let total = good+bad+neutral;
  if(total===0) return <p>No feedback given</p>
  return (
    <div>
       <h1>statistics</h1>
       <table>
         <tbody>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text='all' value={total} />
          <Statistic text="average" value={(good+bad*-1)/total} />
          <Statistic text="positive" value={100*good/total}/>
         </tbody>
       </table>
      
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