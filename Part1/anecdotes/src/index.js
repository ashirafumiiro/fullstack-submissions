import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display =(props)=>{
  return (
    <div>
        <p>{props.anecdote}</p>
      <p>has {props.points} votes</p>
    </div>
  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  

  const handleClick = (index)=>{
    let votes = [...points];
    votes[index] += 1;
    setPoints(votes);
  }

  let max_index = points.indexOf(Math.max(...points));
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdote={props.anecdotes[selected]} points={points[selected]}/>
      <button onClick={()=>handleClick(selected)}>vote</button>
      <button onClick={()=>setSelected(Math.floor(Math.random()*6))}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <Display anecdote={props.anecdotes[max_index]} points={points[max_index]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)