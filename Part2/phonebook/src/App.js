import React, { useState, useEffect } from 'react'
import axios from "axios";

const Filter = (props)=>{
  return (
    <div style={{height: 50}}>filter show with 
        <input value={props.filter} onChange={props.filterChange}/>
      </div>
  );
}

const PersonForm = (props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
    <div>
      name: <input value={props.newName} onChange={props.nameChange}/>
    </div>
    <div>number: <input value={props.phoneNumber} onChange={props.phoneNumberChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Persons = ({persons, filter})=>{
  return (
    <div>
      {persons.filter(p=>p.name.toLowerCase().includes(filter))
        .map(person=><div  key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )

}

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('') 
  const [ filter, setFilter ] = useState('');
  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      console.log(response.data)
      setPersons(response.data);
    })
    .catch((err)=>console.log(err))
  }, []);

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(persons.findIndex(p=>p.name === newName) > -1)
      alert(`${newName} is already added to phonebook`);
    else{
      const person = {name: newName, number: phoneNumber};
      setPersons(persons.concat(person));
    }
  }
  console.log("phone:", phoneNumber);
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} filterChange={(e)=>setFilter(e.target.value)}/>
      
      <PersonForm
        handleSubmit={handleSubmit} 
        newName={newName} 
        nameChange={(e)=>setNewName(e.target.value)}
        phoneNumber={phoneNumber} 
        phoneNumberChange={(event)=>setPhoneNumber(event.target.value)}
        />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App